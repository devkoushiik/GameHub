import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./componenets/Navbar";
import GameGrid from "./componenets/GameGrid";
import GenreList from "./componenets/GenreList";
import { useState } from "react";
import PlatformSelector from "./componenets/PlatformSelector";
import SortSelector from "./componenets/SortSelector";
import GameHeading from "./componenets/GameHeading";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // above 1024
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector />
              <SortSelector />
            </Box>
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
