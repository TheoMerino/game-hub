import { Card, CardBody, CardHeader, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={"lg"} overflow={"hidden"} bgColor={"#202020"}>
      <CardHeader p={0}>
        <Image src={game.background_image} />
      </CardHeader>
      <CardBody>
        <PlatformIconList
          platforms={game.parent_platforms.map((pl) => pl.platform)}
        />
        <Text fontWeight={"bold"} fontSize={"2xl"}>
          {game.name}
        </Text>
      </CardBody>
    </Card>
  );
};

export default GameCard;
