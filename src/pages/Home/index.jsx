import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { Container, TextContent, Title, TitleHighLight } from "./style";
import Banner from "../../assets/images/banner.png";


const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighLight>
              Implemente <br />
            </TitleHighLight>
            o seu futuro.
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button
            title={"Começar agora"}
            variant="secondary"
            type="button"
            onClick={() => navigate("/login")}
          />
        </div>
        <div>
          <img src={Banner} alt="Imagem principal" />
        </div>
      </Container>
    </>
  );
};

export default Home;
