import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function MPADChatBtn() {
  const MPADChatBtn = styled(Button)`
    width: 100px;
  `;

  return <MPADChatBtn variant="contained">채팅목록</MPADChatBtn>;
}
