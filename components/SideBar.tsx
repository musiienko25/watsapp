import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";

function SideBar() {
  return (
    <Container>
      <Header>
        <UserAvatar />
        <IconsConsContainter>
          <IconButton>
            {" "}
            <ChatIcon />
          </IconButton>

          <IconButton>
            {" "}
            <MoreVertIcon />
          </IconButton>
        </IconsConsContainter>
      </Header>
      <div>SideBar</div>
    </Container>
  );
}

export default SideBar;

const Container = styled.div``;

const Header = styled.div``;

const UserAvatar = styled(Avatar)`
  margin: 10px;
`;

const IconsConsContainter = styled.div``;
