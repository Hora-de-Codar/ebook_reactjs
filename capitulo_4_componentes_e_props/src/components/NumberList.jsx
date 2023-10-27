import PropTypes from "prop-types";

function NumberList({ numbers }) {
  return (
    <ul>
      {numbers.map((number, index) => (
        <li key={index}>{number}</li>
      ))}
    </ul>
  );
}

NumberList.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number),
};

export default NumberList;
