import * as NB from "./navbar.styles";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IUserName } from "./navbar.type";

export default function NavBarUI(props: IUserName) {
  return (
    <NB.Wrapper>
      <NB.Logo>ADFO Chat</NB.Logo>
      <NB.User>
        {/* 이미지 수정해야함 */}
        <NB.UserIMG
          src={props.UserIMG ? props.UserIMG : "/Profile.png"}
          alt=""
        ></NB.UserIMG>
        {props.UserName}
        <IconButton
          aria-label="delete"
          size="small"
          onClick={props.onClickBack}
        >
          <ArrowBackIcon fontSize="small" sx={{ color: "white" }} />
        </IconButton>
      </NB.User>
    </NB.Wrapper>
  );
}
