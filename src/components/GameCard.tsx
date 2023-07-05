import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import MetacriticBadge from "./MetacriticBadge";
import getCroppedImageUrl from "../services/url-image";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const platforms = game.parent_platforms.map((pl) => pl.platform);
  const { name, background_image, metacritic } = { ...game };

  return (
    <Card>
      <CardHeader p={0}>
        <Image src={getCroppedImageUrl(background_image)} />
      </CardHeader>
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList platforms={platforms} />
          <MetacriticBadge score={metacritic} />
        </HStack>
        <Text fontWeight={"bold"} fontSize={"2xl"}>
          {name}
        </Text>
      </CardBody>
    </Card>
  );
};

export default GameCard;
