import PropTypes from "prop-types";

function Button2({ type }) {
  return <button type={type}>Click me</button>;
}

Button2.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

export default Button2;
