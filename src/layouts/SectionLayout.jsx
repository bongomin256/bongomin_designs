/* eslint-disable react/prop-types */

const SectionLayout = ({ children, bgDefault = "bg-white" }) => {
  return (
    <section
      className={`${bgDefault} px-[1.5rem] py-16 md:px-[2rem] lg:py-40 lg:px-[8.063rem]`}
    >
      {children}
    </section>
  );
};

export default SectionLayout;
