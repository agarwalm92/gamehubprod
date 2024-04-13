import { Text } from "@chakra-ui/react";
import useGetGames from "../hooks/useGetGames";

const GameGrid = () => {
  const { games, error } = useGetGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((i) => (
          <li key={i.id}>{i.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
