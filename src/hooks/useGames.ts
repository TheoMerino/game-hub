import useData from "./useData";

export interface Platform {
  id: string;
  slug: string;
  name: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: [{ platform: Platform }];
}

const useGames = (genre?: string | null) =>
  useData<Game>("/games", { params: { genres: genre } }, [genre]);

export default useGames;
