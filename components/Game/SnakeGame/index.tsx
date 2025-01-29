"use client";

import { useState, useEffect, useRef } from "react";

type Position = { x: number; y: number };

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Position>({ x: 5, y: 5 });
  const [direction, setDirection] = useState<Position>({ x: 0, y: 0 });
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isAutoplay, setIsAutoplay] = useState<boolean>(false);
  const autoplayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const gridSize = 20;
  const canvaswidth = canvasRef.current?.width || 800;
  const canvasHeight = canvasRef.current?.height || 600;
  const tileCountX = canvaswidth / gridSize;
  const tileCountY = canvasHeight / gridSize;
  // Generate random food position
  const generateFood = (): void => {
    const newFood: Position = {
      x: Math.floor(Math.random() * tileCountX),
      y: Math.floor(Math.random() * tileCountY),
    };
    setFood(newFood);
  };

  // Reset the game
  const resetGame = (): void => {
    setSnake([{ x: 10, y: 10 }]);
    setFood({ x: 5, y: 5 });
    setDirection({ x: 0, y: 0 });
    setGameOver(false);
    setScore(0);
    setIsAutoplay(false);
  };

  // Handle key presses for direction
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (isAutoplay) {
        resetGame();
      }

      switch (e.key) {
        case "ArrowUp":
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
        default:
          break;
      }

      // Clear autoplay timeout if player interacts
      if (autoplayTimeoutRef.current) {
        clearTimeout(autoplayTimeoutRef.current);
      }
      setIsAutoplay(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction, isAutoplay]);

  // Autoplay logic
  useEffect(() => {
    if (!isAutoplay) {
      autoplayTimeoutRef.current = setTimeout(() => {
        setIsAutoplay(true);
        resetGame();
      }, 5000);
    }

    return () => {
      if (autoplayTimeoutRef.current) {
        clearTimeout(autoplayTimeoutRef.current);
      }
    };
  }, [isAutoplay]);

  // Autoplay direction logic
  useEffect(() => {
    if (isAutoplay && !gameOver) {
      const head = snake[0];
      let newDirection: Position = { x: 0, y: 0 };

      if (head.x < food.x) newDirection = { x: 1, y: 0 };
      else if (head.x > food.x) newDirection = { x: -1, y: 0 };
      else if (head.y < food.y) newDirection = { x: 0, y: 1 };
      else if (head.y > food.y) newDirection = { x: 0, y: -1 };

      setDirection(newDirection);
    }
  }, [snake, food, isAutoplay, gameOver]);

  // Game loop
  useEffect(() => {
    const gameLoop = setInterval(() => {
      if (gameOver) {
        if (isAutoplay) {
          resetGame();
        }
        return;
      }

      const newSnake: Position[] = [
        { x: snake[0].x + direction.x, y: snake[0].y + direction.y },
        ...snake,
      ];
      newSnake.pop();

      // Check for collisions
      if (
        newSnake[0].x < 0 ||
        newSnake[0].x >= tileCountX ||
        newSnake[0].y < 0 ||
        newSnake[0].y >= tileCountY ||
        newSnake
          .slice(1)
          .some(
            (segment) =>
              segment.x === newSnake[0].x && segment.y === newSnake[0].y
          )
      ) {
        setGameOver(true);
        return;
      }

      if (newSnake[0].x === food.x && newSnake[0].y === food.y) {
        setSnake([{ x: newSnake[0].x, y: newSnake[0].y }, ...snake]);
        generateFood();
        setScore(score + 1);
      } else {
        setSnake(newSnake);
      }
    }, 100);

    return () => clearInterval(gameLoop);
  }, [snake, direction, gameOver, food, isAutoplay, score]);

  // Draw the game
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = "#F6984A";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw snake
    ctx.fillStyle = "lime";
    snake.forEach((segment) =>
      ctx.fillRect(
        segment.x * gridSize,
        segment.y * gridSize,
        gridSize,
        gridSize
      )
    );

    // Draw food
    ctx.fillStyle = "red";
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);

    // Draw game over message
    console.log(canvas.width);
    if (gameOver) {
      ctx.fillStyle = "white";
      ctx.font = "20px Arial";
      ctx.fillText("Game Over!", canvas.width / 2 - 50, canvas.height / 2);
    }
  }, [snake, food, gameOver]);

  return (
    <section className="min-h-screen  text-white flex flex-col items-center justify-center p-4 w-ful ">
      <h1 className="text-4xl font-bold mb-4">Snake Game</h1>
      <div className="mb-4">
        <p className="text-xl">Score: {score}</p>
        {isAutoplay && <p className="text-sm text-gray-400">Autoplay is on</p>}
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-black z-0"></div>
        <canvas
          ref={canvasRef}
          height={600}
          width={800}
          className="relative z-10 border-2 border-white"
        />
      </div>
      {gameOver && !isAutoplay && (
        <div className="mt-4">
          <p className="text-2xl text-red-500">Game Over!</p>
          <button
            onClick={resetGame}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Restart
          </button>
        </div>
      )}
    </section>
  );
}
