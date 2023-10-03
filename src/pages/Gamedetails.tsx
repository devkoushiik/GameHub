import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Spinner } from "@chakra-ui/spinner";

import { GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import ExpandableText from "../componenets/ExpandableText";
import GameAttributes from "../componenets/GameAttributes";
import GameTrailer from "../componenets/GameTrailer";
import GameScreenshoots from "../componenets/GameScreenshoots";

const Gamedetails = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>

      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenshoots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};
export default Gamedetails;
