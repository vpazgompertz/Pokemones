import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Pokemones = () => {
  const [pokemones, setPokemones] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    api();
  }, []);

  const api = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await response.json();
      setPokemones(data.results);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const selectChange = (event) => {
    setSelectedPokemon(event.target.value);
  };

  const details = () => {
    navigate(`/pokemones/${selectedPokemon}`); 
  };

  return (
    <Container className="container-pokemon text-center pt-5">
      <h1>Selecciona un Pokémon</h1>
      <select onChange={selectChange}>
        <option value="">Selecciona un Pokémon</option>
        {pokemones.map((pokemon, index) => (
          <option key={index} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <div>
        <button className="btn" onClick={details}>
          Ver detalle
        </button>
      </div>
    </Container>
  );
};

export default Pokemones;

