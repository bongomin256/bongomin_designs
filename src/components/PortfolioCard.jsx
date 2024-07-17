/* eslint-disable react/prop-types */
// import data from "../../data.json";

// eslint-disable-next-line react/prop-types

const PortfolioCard = ({ project }) => {
  return (
    <section className="p-3 rounded-md bg-body-text md:w-[15.208rem] md:h-[15.688rem] lg:w-[23.833rem] lg:h-[15.688rem]">
      <div>
        <div>
          <img
            src={project.imgUrl}
            alt={project.projectName}
            className="w-full rounded-md lg:w-[22.5rem] lg:h-[11.5rem]"
          />
        </div>
        <p className="py-2 text-xl font-semibold leading-9 text-center text-pri-bg lg:text-2xl lg:font-medium">
          {project.projectName}
        </p>
      </div>
    </section>
  );
};

// const PortfolioCard = ({ category, projects }) => (
//   <>
//     {projects &&
//       projects.map((project, index) => (
//         <section
//           key={index}
//           className="p-3 rounded-md bg-body-text md:w-[15.208rem] md:h-[15.688rem] lg:w-[23.833rem] lg:h-[15.688rem]"
//         >
//           <div>
//             <div>
//               <img
//                 src={project.imgUrl}
//                 alt={project.projectName}
//                 className="w-full rounded-md lg:w-[22.5rem] lg:h-[11.5rem]"
//               />
//             </div>
//             <p className="py-2 text-xl font-semibold leading-9 text-center text-pri-bg lg:text-2xl lg:font-medium">
//               {category}
//             </p>
//           </div>
//         </section>
//       ))}
//   </>
// );

// const PortfolioCard = ({ project }) => (
//   <section className="p-3 rounded-md bg-body-text md:w-[15.208rem] md:h-[15.688rem] lg:w-[23.833rem] lg:h-[15.688rem]">
//     <div>
//       <div>
//         <img
//           src={project.imgUrl}
//           alt={project.projectName}
//           className="w-full rounded-md lg:w-[22.5rem] lg:h-[11.5rem]"
//         />
//       </div>
//       <p className="py-2 text-xl font-semibold leading-9 text-center text-pri-bg lg:text-2xl lg:font-medium">
//         {project.projectName}
//       </p>
//       <p className="text-center text-gray-700">{project.taskDescription}</p>
//       <a href={project.url} className="text-blue-500 hover:underline">
//         View Project
//       </a>
//     </div>
//   </section>
// );
export default PortfolioCard;
