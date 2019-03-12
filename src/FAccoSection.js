import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const sectionStyle = {
  background: "#6db65b",
  border: "2px solid #008f68",
  marginTop: 10,
  padding: "10px 20px"
};
const FAccoSection = props => {
  const onClick = () => {
    props.onClick(props.label);
  };

  const { isOpen, label } = props;
  const sectionWrapperStyle = {
    background: isOpen ? "#0ae002" : "#9db05b",
    border: "1px solid #008f68",
    padding: "5px 10px"
  };
  return (
    <div style={sectionWrapperStyle}>
      <NavLink onClick={onClick} to="/" style={{ cursor: "pointer" }}>
        {label}
        <div style={{ float: "right" }}>
          {!isOpen && <span>&#9650;</span>}
          {isOpen && <span>&#9660;</span>}
        </div>
      </NavLink>
      {isOpen && <div style={sectionStyle}>{this.props.children}</div>}
    </div>
  );
};
FAccoSection.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  isOpen: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
export default FAccoSection;
