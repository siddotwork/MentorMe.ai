import {useNavigate } from "react-router-dom";
import "./GeneralButton.scss";
import type { ButtonProps } from "./types";

export const GeneralButton = ({ label }: ButtonProps) => {
    const navigate=useNavigate()
  const handleButtonClick = () => {
    if (label.toLowerCase() === "login") {
      navigate("/login")
    } else if (label.toLowerCase() === "get started") {
      navigate("/signup")
    }
  };
  return (
    <div className="button">
      <button className="button__control" onClick={handleButtonClick}>
        {label}
      </button>
    </div>
  );
};
