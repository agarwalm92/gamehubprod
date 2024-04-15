import useData from "./useData";

export interface PlatformParent {
  id: number;
  name: string;
  slug: string;
}
const useGetPlatforms = () =>
  useData<PlatformParent>("/platforms/lists/parents");

export default useGetPlatforms;
