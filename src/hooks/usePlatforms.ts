import useData from "./useData";
import { Platform } from "./useGames";

const usePlatfoms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatfoms;
