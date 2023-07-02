import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchGamesResponse {
  count: number;
  next: string;
  previous: string;
  results: Game[];
}
interface Game {
  id: number;
  name: string;
}

const useGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (error instanceof CanceledError) setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGame;
