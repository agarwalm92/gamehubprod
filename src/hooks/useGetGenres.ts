import { useState, useEffect } from "react";
import ApiClient from "../services/ApiClient";

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

interface FetchGenre {
  count: number;
  results: Genre[];
}
const useGetGenres = () => {
  const [genres, setGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    ApiClient.get<FetchGenre>("/genres")
      .then((res) => {
        setGenre(res.data.results);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, []);
  return { genres, error, loading };
};
export default useGetGenres;
