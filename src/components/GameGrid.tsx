import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const cardSkeletons = [1, 2, 3, 4, 5];

  return (
    <>
      {error && <Text>{error}</Text>}
      {data && (
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
          {data.map((game) => (
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
