import React from "react";
import styled from "styled-components";

function Button({ className, title, onClick, style }) {
  return (
    <>
      <ButtonSubmit
        style={style}
        className={className}
        onClick={onClick}
        type="submit">
        {title}
      </ButtonSubmit>
    </>
  );
}

export default Button;

export const ButtonSubmit = styled.button`
  border-radius: 20px;
  background-color: transparent;
  border: 1.5px solid #00bafc;
  color: #00bafc;
  padding: 9px 32px;
  font-size: 16px;
  line-height: 22px;
  cursor: pointer;
  transition: 0.2s all ease-in-out;

  &:hover {
    background-color: #00bafc;
    color: #fff;
  }
`;
