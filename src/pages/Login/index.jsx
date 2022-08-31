import React from "react";
import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input/index";
import {
  Column,
  Container,
  CreateText,
  ForguivePassword,
  Row,
  SubTitleLogin,
  Title,
  TitleLogin,
  Wrapper
} from "./style";


const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu login e make the change</SubTitleLogin>
            <form>
              <Input
                leftIcon={<MdEmail />}
                placeholder="E-mail"
              />
              <Input
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button type="button" title="Entrar" variant="secondary" onClick={() => navigate("/feed")} />
            </form>
            <Row>
              <ForguivePassword> Esqueci a senha</ForguivePassword>
              <CreateText> <button onClick={() => navigate("/register")}>Criar conta</button> </CreateText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Login;
