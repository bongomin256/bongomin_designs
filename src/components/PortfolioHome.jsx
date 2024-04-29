import SectionLayout from "../layouts/SectionLayout";

const PortfolioHome = ({ bgDefault }) => {
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
          <ul className="flex flex-row flex-wrap gap-4 text-heading3-sm mb-7 md:">
            <li>All Project</li>
            <li>Web Design</li>
            <li>Web Development</li>
            <li>Graphic Design</li>
            <li>SEO Optimization</li>
          </ul>
          <div></div>
        </section>
      </section>
    </SectionLayout>
  );
};

export default PortfolioHome;
