import { useState, useEffect } from "react";

// import data from "../../data.json";

import SectionLayout from "../layouts/SectionLayout";
import PortfolioCard from "./PortfolioCard";

const PortfolioHome = ({ bgDefault, id }) => {
  const [portfolioData, setPortfolioData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeTab, setActiveTab] = useState("All Projects");

  const tabs = [
    "All Projects",
    "Web Design",
    "Web Development",
    "Graphic Design",
    "SEO",
  ];

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setPortfolioData(data.portfolio);
        setFilteredData(data.portfolio.flatMap((item) => item.projects)); // Initialize with all projects
        console.log(filteredData);
      })
      .catch((error) => console.error("Error fetching the data:", error));
  }, []);

  // Filter projects based on the active tab
  useEffect(() => {
    if (portfolioData.length > 0) {
      if (activeTab === "All Projects") {
        setFilteredData(portfolioData.flatMap((item) => item.projects));
      } else {
        const category = portfolioData.find(
          (item) => item.category === activeTab
        );
        setFilteredData(category ? category.projects : []);
      }
    }
  }, [activeTab, portfolioData]);

  return (
    <SectionLayout bgDefault={`bg-white`}>
      <section>
        <div className="mb-[2.25rem]">
          <div className="flex items-center justify-center gap-3 mb-6 text-center">
            <span className=" w-[4.5rem] border-b border-cta-sec"></span>
            <h3 className="inline-block text-cta-sec text-heading3-sm font-headerFonts">
              Our Portfolio
            </h3>
            <span className=" w-[4.5rem] border-b border-cta-sec"></span>
          </div>
          <h2 className="text-center text-heading-text text-heading2-sm font-headerFonts">
            Checkout our recent projects
          </h2>
        </div>
        <section>
          <ul className="flex flex-row flex-wrap gap-4 text-heading3-sm mb-7 lg:justify-center">
            {tabs &&
              tabs.map((tab) => (
                <li
                  key={tab}
                  className={`px-4 py-2 mx-2 transition-all ease-in-out duration-300 ${
                    activeTab === tab
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  } rounded cursor-pointer`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </li>
              ))}
          </ul>
          <div className="flex flex-col justify-center gap-3 transition-all duration-500 ease-in-out md:flex-row md:gap-5 md:flex-wrap">
            {/* grid gap-3 md:grid-flow-col md:grid-rows-3 md:justify-center
            lg:gap-5 */}

            {filteredData.map((project, index) => (
              <PortfolioCard
                key={index}
                category={activeTab}
                catName={portfolioData.categoru}
                project={project}
              />
            ))}
          </div>
        </section>
      </section>
    </SectionLayout>
  );
};

export default PortfolioHome;
