import React from "react";
import Header from "../../components/Header";
import { Container, Column, Title, TitleHighLight } from "./style";
import Card from "../../components/Card"
import UserInfo from "../../components/UserInfo";

const Feed = () => {
  return (
    <>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card/>
          <Card/>
          <Card/>
        </Column>
        <Column flex={1}>
            <TitleHighLight># RANKING DA SEMANA</TitleHighLight>
            <UserInfo nome="Arlyson Mathias" percentual={85}/>
            <UserInfo nome="Arlyson Mathias" percentual={64}/>
            <UserInfo nome="Arlyson Mathias" percentual={55}/>
            <UserInfo nome="Arlyson Mathias" percentual={31}/>
        </Column>
      </Container>
    </>
  );
};

export default Feed;
