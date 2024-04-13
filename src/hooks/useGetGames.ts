import { useState, useEffect } from "react";
import ApiClient from "../services/ApiClient";

const useGetGames = () => {
  interface Game {
    id: number;
    name: string;
  }

  interface FetchGames {
    count: number;
    results: Game[];
  }
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    ApiClient.get<FetchGames>("/games")
      .then((res) => setGames(res.data.results))
      .catch((e) => {
        setError(e.message);
      });
  }, []);
  return { games, error };
};
export default useGetGames;
