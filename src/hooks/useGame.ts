import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosResponse, CanceledError } from "axios";

interface FetchGamesResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}

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

const useGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  const handleResponse = (response: AxiosResponse<FetchGamesResponse>) => {
    setGames(response.data.results);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then(handleResponse)
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGame;
