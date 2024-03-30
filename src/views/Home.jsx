import React from "react";
import { Container } from "react-bootstrap";
import pikachu from "../assets/img/pikachu.png";

const Home = () => {
  return (
    <Container className="container-home text-center p-5">
      <h1>Bienvenido maestro pokemón</h1>
      <img className="img" src={pikachu} alt="Pikachu" /> 
    </Container>
  );
};

export default Home;
