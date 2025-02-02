"use client";

import React, { useEffect, useState } from "react";
import { Categories, IPortfolio } from "@/types/apiResponse";
import { fetchPortfoliosInfo } from "@/services/generalService";
import { FaAngleDown, FaRegEye } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

interface Props {
  portfolioCategory: Categories;
}

const PortfolioComponent = ({ portfolioCategory }: Props) => {
  const [portfolio, setPortfolio] = useState<IPortfolio[] | null>(null);
  const [Loading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");

  const handleClick = (category: string) => {
    setActiveCategory(category);
    getPortfolio(category);
  };

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const categories = portfolioCategory;

  const getPortfolio = async (categoryId: string) => {
    setIsLoading(true); 
    try {
      const res = await fetchPortfoliosInfo(categoryId);
      setPortfolio(res);
      console.log(res)
    } catch (error) {
      console.error("Error fetching portfolio:", error);
    } finally {
      setIsLoading(false);  
    }
  };

  useEffect(() => {
    if (categories && categories.length > 0) {
      getPortfolio(categories[0].name);  
    }
  }, [categories]);

  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button
              onClick={() => handleClick("")}
              className={activeCategory === "" ? "active" : ""}
              data-filter-btn
            >
              All
            </button>
          </li>
          {categories?.map((category) => (
            <li key={category.name} className="filter-item">
              <button
                onClick={() => handleClick(category.name)}
                className={activeCategory === category.name ? "active" : ""}
                data-filter-btn
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button
            className={`filter-select ${isActive ? "active" : ""}`}
            data-select
            onClick={toggleActive}
          >
            <div className="select-value" data-selecct-value>
              Select category
            </div>

            <div className="select-icon">
              <FaAngleDown name="chevron-down"></FaAngleDown>
            </div>
          </button>

          <ul className="select-list">
            {categories?.map((category) => (
              <li key={category.name} className="select-item">
                <button onClick={() => handleClick(category.name)} data-select-item>
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {Loading ? (
            <div style={{ color: "white" }}>Loading...</div>
          ) : (
            portfolio?.map((project: IPortfolio, index: number) => (
              <li key={index} className="project-item active" data-filter-item data-category="web development">
                <Link href={project?.url}>
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <FaRegEye name="eye-outline"></FaRegEye>
                    </div>
                    <Image height={300} width={400} src={project?.image?.url} alt={project?.image?.alt || "Portfolio Project"}  priority  />
                  </figure>

                  <h3 className="project-title">{project.title}</h3>

                  <p className="project-category">{project.category.name}</p>
                </Link>
              </li>
            ))
          )}
        </ul>
      </section>
    </article>
  );
};

export default PortfolioComponent;
