import { useState, useEffect } from "react";
import ApiClient from "../services/ApiClient";

interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    ApiClient.get<FetchResponse<T>>(endpoint)
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, []);
  return { data, error, loading };
};
export default useData;
