import { Container, NameText, Progress, UserPicture } from "./style"

const UserInfo = ({ nome, percentual}) => {

    return (
        <Container>
            <UserPicture src="https://avatars.githubusercontent.com/u/99908779?v=4"/>
                <div>
                    <NameText>{nome}</NameText>
                    <Progress percentual={percentual}/>
                </div>           
        </Container>
    )
}

export default UserInfo;