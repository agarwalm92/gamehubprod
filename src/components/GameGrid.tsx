import { SimpleGrid, Text } from "@chakra-ui/react";
import useGetGames from "../hooks/useGetGames";
import GameCard from "./GameCard";
import GameGridSkeleton from "./GameGridSkeleton";

const GameGrid = () => {
  const { data, error, loading } = useGetGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 8, 7, 9, 10];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 3, lg: 3, xl: 4 }}
        spacing={3}
        padding={10}
      >
        {loading && skeletons.map((i) => <GameGridSkeleton key={i} />)}
        {data.map((i) => (
          <GameCard key={i.id} game={i} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
