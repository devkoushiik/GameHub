import { Grid, Show, GridItem, Flex, Box } from "@chakra-ui/react";
import GameGrid from "../componenets/GameGrid";
import GameHeading from "../componenets/GameHeading";
import GenreList from "../componenets/GenreList";
import PlatformSelector from "../componenets/PlatformSelector";
import SortSelector from "../componenets/SortSelector";

const Homepage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`, // above 1024
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
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
};
export default Homepage;

{
  /* <GridItem area="nav">
<Navbar />
</GridItem> */
}
