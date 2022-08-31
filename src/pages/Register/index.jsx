import Header from "../../components/Header";
import Input from "../../components/Input";
import { MdEmail, MdLock, MdAccountCircle } from "react-icons/md";
import {
  Container,
  Wrapper,
  Column,
  Title,
  TitleRegister,
  SubTitleRegister,
  CreateDescription,
  CreateText,
} from "./style";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Register = () => {
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
        <Wrapper>
          <Column>
            <Wrapper>
              <TitleRegister>Comece agora grátis</TitleRegister>
              <SubTitleRegister>
                Crie sua conta e make the change
              </SubTitleRegister>
              <form>
                <Input placeholder="Nome completo" name="nome" type="text"  leftIcon={<MdAccountCircle/>}/>
                <Input placeholder="E-mail" leftIcon={<MdEmail />} />
                <Input
                  placeholder="Senha"
                  type="password"
                  leftIcon={<MdLock />}
                />
                <Button type="button" title="Cadastrar" variant="secondary" onClick={() => navigate("/login")} />
              </form>
              <CreateDescription>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </CreateDescription>
              <CreateText>
                Já possui conta?{" "}
                <button onClick={() => navigate("/login")}>Faça login</button>
              </CreateText>
            </Wrapper>
          </Column>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;
