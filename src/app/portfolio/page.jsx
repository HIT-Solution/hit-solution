import React from "react";
import PortfolioSlider from "../../components/PortfolioSlider";
import PortfolioTab from "../../components/PortfolioTab";

const Portfolio = () => {
  return (
    <div>
      {/* portfolio slider */}
      <div>
        <PortfolioSlider />
      </div>
      {/* tab */}
      <div>
        <PortfolioTab />
      </div>
    </div>
  );
};

export default Portfolio;
