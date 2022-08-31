import Button from "../Button";
import {Container, Collumn, Menu, MenuRight, Input, BuscarInputContainer, Row, UserPicture, Wrapper} from "./style"
import Logo  from "../../assets/images/logo-dio.png"

const Header = ({autenticado}) => {
    return(
        <Wrapper>
            <Container>
                <Row>
                    <img src={Logo} alt="Logo"/>
                    {
                        autenticado ? (
                            <>
                                <BuscarInputContainer>
                                    <Input placeholder="Buscar..." />
                                </BuscarInputContainer>
                                <Menu>Live Code</Menu>                    
                                <Menu>Global</Menu>                                       
                            </>
                        ) : null 
                    }
                </Row>
                <Row>
                    {
                        autenticado ? (
                            <UserPicture src="https://avatars.githubusercontent.com/u/99908779?v=4"/>
                        ) : (
                            <>
                                <MenuRight href="">Home</MenuRight>
                                <Button title={"Entrar"} variant="primary"/>
                                <Button title={"Cadastrar"} variant="primary"/>
                            </>
                        )
                    }
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Header;