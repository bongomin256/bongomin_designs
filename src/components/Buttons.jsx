/* eslint-disable react/prop-types */
const Button = ({ children }) => {
  return (
    <button className="bg-cta-pri px-5 py-3 text-white rounded-xl transition-all duration-300 ease-in hover:bg-cta-sec hover:text-sec-bg">
      {children}
    </button>
  );
};
export default Button;
