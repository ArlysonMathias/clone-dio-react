import { FiThumbsUp } from "react-icons/fi";
import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./style";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://i.pinimg.com/originals/ee/70/0c/ee700cf9a8a814ad0995772a1b1d18da.png"/>
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/99908779?v=4"/>
          <div>
            <h4>Arlyson Mathias</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de Html e CSS</h4>
          <p>
            Projeito feito por A.Mathias no bootcamp de React desenvolvido na
            Dio por ... <strong>Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JAVASCRIPT</h4>
          <p>
            <FiThumbsUp /> 16
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export default Card;
