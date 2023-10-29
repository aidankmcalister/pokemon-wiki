// Your component file

import React, { useEffect, useState } from "react";
import { fetchData } from "./logic/pokeAPI";

const FirstSlide = () => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const randomID = Math.floor(Math.random() * 800);

    fetchData(randomID)
      .then((data) => {
        if (data) {
          setPokemonData(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!pokemonData) {
    return <p>Loading...</p>;
  }

  return (
    <h1
      className="m-3 text-6xl font-sairo font-bold italic text-gray-500 opacity-75"
      style={{
        writingMode: "vertical-rl",
        textOrientation: "upright",
        letterSpacing: "-1.25rem",
      }}>
      {pokemonData.name.toUpperCase()}
    </h1>
  );
};

export default FirstSlide;
