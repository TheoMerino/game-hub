import "./App.css";
import { Grid, GridItem, Show, VStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem area={"main"}>
        <PlatformSelector
          onSelectPlatform={(platform: Platform) =>
            setGameQuery({ ...gameQuery, platform: platform })
          }
          selectedPlatform={gameQuery.platform}
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={4}>
          <GenresList
            onSelectGenre={(genre: Genre) =>
              setGameQuery({ ...gameQuery, genre: genre })
            }
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
