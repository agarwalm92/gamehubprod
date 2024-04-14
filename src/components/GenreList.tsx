import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGetGenres from "../hooks/useGetGenres";
import CroppedImageUrl from "../services/CroppedImageUrl";

const GenreList = () => {
  const { data } = useGetGenres();
  return (
    <List>
      {data.map((g) => (
        <ListItem key={g.id} paddingY="5px">
          <HStack>
            <Image
              src={CroppedImageUrl(g.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Text fontSize="lg">{g.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
