import { AxiosResponse, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchData<T> {
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  const handleResponse = (response: AxiosResponse<FetchData<T>>) => {
    setData(response.data.results);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchData<T>>(endpoint, { signal: controller.signal })
      .then(handleResponse)
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default useData;
