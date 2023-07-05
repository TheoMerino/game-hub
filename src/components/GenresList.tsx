import useGenres from "../hooks/useGenres";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: string) => void;
}

const GenresList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  return (
    <>
      <Text fontSize={"3xl"} fontWeight={"bold"}>
        Genres
      </Text>
      <List spacing={2}>
        {data.map((genre) => {
          return (
            <ListItem key={genre.id} onClick={() => onSelectGenre(genre.slug)}>
              <HStack>
                <Image
                  src={genre.image_background}
                  boxSize={"35px"}
                  borderRadius={"md"}
                />
                <Button variant={"link"}>{genre.name}</Button>
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
