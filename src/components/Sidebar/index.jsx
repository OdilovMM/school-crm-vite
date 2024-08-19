import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar";
import { Container, Side, Body, Wrapper } from "./style";

export const Sidebar = () => {
  return (
    <Container>
      <Side>
        <h1>Sidebar</h1>
      </Side>
      <Body>
        <Navbar />
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Body>
    </Container>
  );
};
