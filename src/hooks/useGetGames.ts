import { useState, useEffect } from "react";
import ApiClient from "../services/ApiClient";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

interface FetchGames {
  count: number;
  results: Game[];
}
const useGetGames = () => {
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
