import { SimpleGrid, Text } from "@chakra-ui/react";
import useGetGames from "../hooks/useGetGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGetGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={10}
      >
        {games.map((i) => (
          <GameCard key={i.id} game={i} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
