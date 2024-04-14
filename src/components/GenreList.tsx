import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGetGenres from "../hooks/useGetGenres";
import CroppedImageUrl from "../services/CroppedImageUrl";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, error, loading } = useGetGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (error) return null;
  // if (loading) return <Spinner />; //for spinner use this and include it in the imports, below is skeleton example
  return (
    <List>
      {loading && skeletons.map((i) => <GenreListSkeleton key={i} />)}
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
