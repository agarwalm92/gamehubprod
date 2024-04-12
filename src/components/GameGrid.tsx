import React, { useEffect, useState } from "react";
import ApiClient from "../services/ApiClient";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGames {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    ApiClient.get<FetchGames>("/games")
      .then((res) => setGames(res.data.results))
      .catch((e) => {
        setError(e.message);
      });
  });
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
