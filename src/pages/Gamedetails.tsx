import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Spinner } from "@chakra-ui/spinner";

import { Heading } from "@chakra-ui/react";
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
    <div>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />

      <GameTrailer gameId={game.id} />
      <GameScreenshoots gameId={game.id} />
    </div>
  );
};
export default Gamedetails;
