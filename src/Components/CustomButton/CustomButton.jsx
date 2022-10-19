import './style.css'
import PropTypes from "prop-types";

const CustomButton = ({ name, click }) => {
  return <button onClick={() => console.log("> consolelogzou")} className="">{name}</button>;
};

CustomButton.propTypes = {
  name: PropTypes.string,
  click: PropTypes.func
};
CustomButton.defaultProps = {
  name: "BestDay",
};

export default CustomButton;
