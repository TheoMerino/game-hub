import useGenres, { Genre } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenresList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  return (
    <>
      <Heading fontSize={"2xl"} fontWeight={"bold"} marginBottom={3}>
        Genres
      </Heading>
      <List spacing={2}>
        {data.map((genre) => {
          return (
            <ListItem key={genre.id} onClick={() => onSelectGenre(genre)}>
              <HStack>
                <Image
                  src={genre.image_background}
                  boxSize={"35px"}
                  borderRadius={"md"}
                  objectFit="cover"
                />
                <Button
                  variant={"link"}
                  fontWeight={
                    selectedGenre?.slug === genre.slug ? "bold" : "normal"
                  }
                  whiteSpace="normal"
                  textAlign="left"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
      {isLoading && !error && <Spinner />}
    </>
  );
};

export default GenresList;
