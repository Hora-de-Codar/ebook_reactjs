import PropTypes from "prop-types";

function User({ name, age }) {
  return (
    <div>
      <p>Nome: {name}</p>
      <p>Idade: {age}</p>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default User;
