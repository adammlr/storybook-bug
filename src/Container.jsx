import React from "react";
import PropTypes from "prop-types";

function Container({ children }) {
  return <div>{children}</div>;
}

Container.propTypes = {
  size: PropTypes.oneOf(["small", "large"])
};

export default Container;
