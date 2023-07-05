import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem area={"main"}>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={4}>
          <GenresList
            onSelectGenre={(genre: string) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
