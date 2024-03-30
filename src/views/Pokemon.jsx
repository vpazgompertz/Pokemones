import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Pokemon = () => {
  const { name } = useParams(); 

  const [stats, setStats] = useState([]);
  const [imagen, setImagen] = useState("");
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetchData();
  }, [name]); 

  const fetchData = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      setStats(data.stats);
      setImagen(data.sprites.front_default);
      setTypes(data.types.map(type => type.type.name));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="details">
      <div className="pokemon-info">
        <img src={imagen} alt={name} className="pokemon-image" />
        <div>
          <h1>{name}</h1>
          <ul>
            {stats.map((stat, index) => (
              <li key={index}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
          <ul className="pokemon-type">
            {types.map((type, index) => (
              <li key={index}>{type}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
