import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter } from "react-router-dom";
import AccordionSection from "./AccordionSection";

class Accordion extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    const openSections = {};
    this.props.children.forEach(child => {
      if (child.props.isOpen) {
        openSections[child.props.label] = true;
      }
    });

    this.state = { openSections };
  }

  onClick = label => {
    const {
      state: { openSections }
    } = this;

    const isOpen = !!openSections[label];

    // if (allowMultipleOpen) {
    //   this.setState({
    //     openSections: {
    //       ...openSections,
    //       [label]: !isOpen
    //     }
    //   });
    // } else {
    this.setState({
      openSections: {
        [label]: !isOpen
      }
    });
    // }
  };

  render() {
    const {
      onClick,
      props: { children },
      state: { openSections }
    } = this;

    return (
      <BrowserRouter>
        <div style={{ border: "2px solid #008f68" }}>
          {children.map(child => (
            <AccordionSection
              isOpen={!!openSections[child.props.label]}
              label={child.props.label}
              onClick={onClick}
            >
              {child.props.children}
            </AccordionSection>
          ))}
        </div>
      </BrowserRouter>
    );
  }
}

export default Accordion;
