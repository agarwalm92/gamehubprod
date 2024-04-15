import { useState, useEffect } from "react";
import ApiClient from "../services/ApiClient";
import { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      setLoading(true);
      ApiClient.get<FetchResponse<T>>(endpoint, { ...requestConfig })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((e) => {
          setError(e.message);
          setLoading(false);
        });
    },
    deps ? [...deps] : []
  );
  return { data, error, loading };
};
export default useData;
