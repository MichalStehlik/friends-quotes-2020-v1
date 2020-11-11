import {useState} from "react";
import './App.css';
import {Container, Navbar, Nav, NavbarBrand} from "reactstrap";
import Quotes from "./components/Quotes";

function App() {
  return (
    <>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Friends Quotes</NavbarBrand>
      <Nav className="mr-auto" navbar>
      </Nav>
    </Navbar>
    <Container>
      <Quotes />
    </Container>
    </>
  );
}

export default App;
