import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameGridSkeleton from "./GameGridSkeleton";
import { GameQuery } from "../App";
import useGetGames from "../hooks/useGetGames";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, loading } = useGetGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 8, 7, 9, 10];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 3, lg: 3, xl: 4 }}
        spacing={6}
        padding={10}
      >
        {loading && skeletons.map((i) => <GameGridSkeleton key={i} />)}

        {/* {data.length != 0
          ? data.map((i) => <GameCard key={i.id} game={i} />)
          : "No games found"} */}
        {data.map((i) => (
          <GameCard key={i.id} game={i} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
