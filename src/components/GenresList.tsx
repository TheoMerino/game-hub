import useGenres from "../hooks/useGenres";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";

const GenresList = () => {
  const { data, error, isLoading } = useGenres();
  return (
    <>
      <Text fontSize={"3xl"} fontWeight={"bold"}>
        Genres
      </Text>
      <List spacing={2}>
        {data.map((genre) => {
          return (
            <ListItem key={genre.id}>
              <HStack>
                <Image
                  src={genre.image_background}
                  boxSize={"35px"}
                  borderRadius={"md"}
                />
                <Text>{genre.name}</Text>
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
