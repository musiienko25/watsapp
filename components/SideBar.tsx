import React from "react";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import { Button, IconButton } from "@mui/material";

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
      <Search>
        <SearchIcon />
        <SearchInput placeholder="Search in chat" />
      </Search>
      <SideBarButton>Start a new chat</SideBarButton>
    </Container>
  );
}

export default SideBar;

const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`;

const SideBarButton = styled(Button)`
  width: 100%;
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;

const Container = styled.div``;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;

const Header = styled.div`
  display: flex;
  position: sticky;
  justify-content: space-between;
  top: 0;
  background: white;
  z-index: 1;
  justify-content: space-between;
`;

const UserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const IconsConsContainter = styled.div``;
