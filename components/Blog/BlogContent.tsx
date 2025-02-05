import { FC } from "react";

interface BlogContentProps {
  description: any[];
  limit?: number;
}

const BlogContent: FC<BlogContentProps> = ({ description, limit }) => {
  let textCount = 0;

  const renderBlock = (block: any, index: number) => {
    const { type, children, level } = block;

    const filteredChildren = children?.map((child: any, childIndex: number) => {
      const remainingLimit = limit ? limit - textCount : undefined;
      if (limit && textCount >= limit) return null;

      const text = child.text?.slice(0, remainingLimit);
      textCount += child.text?.length || 0;

      return <span key={childIndex}>{limit ? `${text}...` : text}</span>;
    });

    switch (type) {
      case "paragraph":
        return <p key={index}>{filteredChildren}</p>;
      case "heading":
        return level === 1 ? (
          <h1 key={index}>{filteredChildren}</h1>
        ) : (
          <h2 key={index}>{filteredChildren}</h2>
        );
      case "listItem":
        return <li key={index}>{filteredChildren}</li>;
      case "link":
        return (
          <a href={children[0].url} key={index}>
            {filteredChildren}
          </a>
        );
      case "image":
        return (
          <img src={children[0].url} alt={children[0].title} key={index} />
        );
      case "table":
        return (
          <table key={index}>
            <thead>
              <tr>
                {children[0].header.map(
                  (header: string, headerIndex: number) => (
                    <th key={headerIndex}>{header}</th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {children[1].body.map((row: any[], rowIndex: number) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        );
      case "blockquote":
        return <blockquote key={index}>{filteredChildren}</blockquote>;
      default:
        return null;
    }
  };

  return (
    <div className="prose">
      {description?.map((block, index) => renderBlock(block, index))}
    </div>
  );
};

export default BlogContent;
