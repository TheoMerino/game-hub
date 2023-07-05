import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>
          <GenresList />
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
