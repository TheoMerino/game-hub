import useData from "./useData";

export interface Platform {
  id: number;
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

const useGames = (genre?: string | null, platform?: Platform | null) =>
  useData<Game>(
    "/games",
    { params: { genres: genre, parent_platforms: platform?.id } },
    [genre, platform]
  );

export default useGames;
