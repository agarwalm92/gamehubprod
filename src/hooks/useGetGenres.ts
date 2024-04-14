import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

const useGetGenres = () => useData<Genre>("/genres");

export default useGetGenres;
