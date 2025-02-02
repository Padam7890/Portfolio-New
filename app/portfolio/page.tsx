import React from "react";
import PortfolioComponent from "../../components/Portfolio/PortfolioComponent";
import { fetchCategoryInfo } from "@/services/generalService";
import { Categories } from "@/types/apiResponse";
const page = async () => {
  const portfolioCategory:Categories = await fetchCategoryInfo();
  console.log(portfolioCategory);
  return (
    <>
      <PortfolioComponent portfolioCategory={portfolioCategory} />
    </>
  );
};

export default page;
