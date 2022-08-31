import React from "react";
import { IconContainer, InputContainer, InputText } from "./style";


const Input = ({ leftIcon, placeholder}) => {
  return (
    <>
      <InputContainer>
        {leftIcon ?
          <IconContainer>
            {leftIcon}
          </IconContainer> : null}
          <InputText placeholder={placeholder}/>          
      </InputContainer>
    </>
  );
};

export default Input;
