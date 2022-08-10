import React from "react";
import "./Button.scss";

const Button = ({ text, click }) => {
  return (
    <div onClick={click} className="btn__comp">
      {text}
    </div>
  );
};

export default Button;
