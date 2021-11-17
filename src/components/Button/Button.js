import React from "react";
import "./Button.css";

const Button = ({ children, ...args }) => {
  return (
    <button className="button" {...args}>
      {children}
    </button>
  );
};

export default Button;
