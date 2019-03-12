import React, { useState } from "react";
import PropTypes from "prop-types";
import { BrowserRouter } from "react-router-dom";
import AccordionSection from "./AccordionSection";

const AccordionF = props => {
  const [openSection, setOpenSection] = React.useState("");

  const onClick = label => {
    const newLabel = label === openSection ? "" : label;
    setOpenSection(newLabel);
  };

  const { children } = props;

  return (
    <BrowserRouter>
      <div style={{ border: "2px solid #008f68" }}>
        {children.map(child => (
          <AccordionSection
            isOpen={openSection === child.props.label}
            label={child.props.label}
            onClick={onClick}
          >
            {child.props.children}
          </AccordionSection>
        ))}
      </div>
    </BrowserRouter>
  );
};
AccordionF.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired
};
export default AccordionF;
