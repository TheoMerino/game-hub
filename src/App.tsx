import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem area={"main"} bgColor={"twitter.500"}>
        Main
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bgColor={"whatsapp.700"}>
          Aside
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
