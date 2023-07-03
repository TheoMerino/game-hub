import React, { useEffect, useState } from "react";
import useGame from "../hooks/useGame";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGame();

  return (
    <>
      {error && <Text>{error}</Text>}
      {games && (
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
            "2xl": 5,
          }}
          spacing={10}
        >
          {games.map((game) => (
            <GameCard game={game} />
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default GameGrid;
