import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  background: white;
  border: solid 1px black;
  color: black;
`;

Button.displayName = "Button";
Button.propTypes = {
  size: PropTypes.oneOf(["small", "large"])
};

export default Button;
