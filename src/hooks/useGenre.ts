import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchGenreResponse {
  results: Genre[];
}

interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenre = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGenreResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) setError(error.message);
      });

    return () => controller.abort();
  }, []);

  return { genres, error };
};

export default useGenre;
