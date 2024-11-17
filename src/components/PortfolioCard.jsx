/* eslint-disable react/prop-types */
// import data from "../../data.json";

// eslint-disable-next-line react/prop-types

const PortfolioCard = ({ project }) => {
  return (
    <a
      href={`${project.url}`}
      target="_blank"
      className="p-3 rounded-md bg-body-text md:w-[15.208rem] md:h-[15.688rem]  lg:w-[23.833rem] lg:h-[15.688rem] cursor-pointer"
    >
      <div>
        <div className="overflow-hidden group">
          <img
            src={project.imgUrl}
            alt={project.projectName}
            className="w-full rounded-md lg:w-[22.5rem] lg:h-[11.5rem] transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <p className="py-2 text-xl font-semibold leading-9 text-center text-pri-bg lg:text-2xl lg:font-medium">
          {project.projectName}
        </p>
      </div>
    </a>
  );
};

export default PortfolioCard;
