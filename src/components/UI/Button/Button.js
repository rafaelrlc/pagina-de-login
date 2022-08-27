import React from "react";
import styled from "styled-components";

//import classes from "./Button.module.css";
const Login_button = styled.button`
  font: inherit;
  border: 1px solid #ffa500;
  background: #ffa500;
  color: white;
  padding: 0.75rem 3.5rem;
  cursor: pointer;
  font-size: 1.15rem;
  border-radius: 30px;

  &:hover,
  &:active {
    background: #cb8504;
    border-color: #cb8504;
  }

  &:focus {
    outline: none;
  }

  &:disabled,
  &:focus:disabled,
  &:hover:disabled,
  &:active:disabled {
    background: #ccc;
    border-color: #ccc;
    color: #666666;
    cursor: not-allowed;
  }

  &.button-logout {
    font: inherit;
    background: #ffa500;
    border: 1px solid #ffa500;
    padding: 0.5rem 1.5rem;
    color: ${(props) => props.cor};
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
    border-radius: 20px;
  }

  &.button-logout:focus {
    outline: none;
  }

  &.button-logout:hover,
  &.button-logout:active {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.26);
    background-color: #cb8504;
    border-color: #cb8504;
  }
`;
const Button = (props) => {
  return (
    <Login_button
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={props.className}
    >
      {props.children}
    </Login_button>
  );
};

export default Button;
