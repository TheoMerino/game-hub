import { Heading } from "@chakra-ui/react";

interface Props {
  platform?: string;
  genre?: string;
}

const GameHeading = ({ platform, genre }: Props) => {
  return (
    <Heading as="h1" marginY={5}>
      {platform} {genre} Games
    </Heading>
  );
};

export default GameHeading;
