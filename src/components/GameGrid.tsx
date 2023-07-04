import React, { useEffect, useState } from "react";
import useGame from "../hooks/useGame";
import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGame();
  const cardSkeletons = [1, 2, 3, 4, 5];

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
          justifyContent={"space-evenly"}
        >
          {isLoading &&
            cardSkeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {games.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default GameGrid;
