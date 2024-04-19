/* eslint-disable react/prop-types */
const Button = ({ children, widthDefault = "px-5 py-3" }) => {
  return (
    <button
      className={`${widthDefault} text-white transition-all duration-300 ease-in  bg-cta-pri rounded-xl hover:bg-cta-sec hover:text-sec-bg`}
    >
      {children}
    </button>
  );
};
export default Button;
