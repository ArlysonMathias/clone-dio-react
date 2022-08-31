import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 300px;
`;

export const Column = styled.div`
  flex: 1;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const Title = styled.h2`
  font-family: "Open-Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  width: 320px;
  margin-bottom: 20px;
  line-height: 44px;
  color: #fff;
`;
export const TitleLogin = styled.p`
  font-family: "Open-Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 20px;
  line-height: 44px;
`;
export const SubTitleLogin = styled.p`
  font-family: "Open-Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 35px;
  line-height: 25px;

  color: #fff;
`;
export const ForguivePassword = styled.p`
  font-family: "Open-Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #E5E044;
`;
export const CreateText = styled.p`
  font-family: "Open-Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;

  color: #E23DD7;

  button{
    background-color: transparent;
    border: none;
    color: #23DD7A;
    cursor: pointer;

    &:hover{
      transform: scale(1.2);
      transition: 0.2s ease-in-out;
      color: #ff0000
    }
  }
`;
