import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGetGenres, { Genre } from "../hooks/useGetGenres";
import CroppedImageUrl from "../services/CroppedImageUrl";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, error, loading } = useGetGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (error) return null;
  // if (loading) return <Spinner />; //for spinner use this and include it in the imports, below is skeleton example

  return (
    <List>
      {loading && skeletons.map((i) => <GenreListSkeleton key={i} />)}
      {data.map((g) => (
        <ListItem
          key={g.id}
          paddingY="5px"
          backgroundColor={g.id == selectedGenre?.id ? "green" : ""}
          borderRadius="10px"
        >
          <HStack>
            <Image
              src={CroppedImageUrl(g.image_background)}
              boxSize="32px"
              borderRadius={8}
              marginX="5px"
            />
            <Button
              onClick={() => onSelectedGenre(g)}
              variant="link"
              fontSize="lg"
            >
              {g.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
