import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatformIconList from "./PlatformIconList";
import MetacriticBadge from "./MetacriticBadge";

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
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((pl) => pl.platform)}
          />
          <MetacriticBadge score={game.metacritic} />
        </HStack>
        <Text fontWeight={"bold"} fontSize={"2xl"}>
          {game.name}
        </Text>
      </CardBody>
    </Card>
  );
};

export default GameCard;
