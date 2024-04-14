import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGetGenres = () => useData<Genre>("/genres");

export default useGetGenres;
