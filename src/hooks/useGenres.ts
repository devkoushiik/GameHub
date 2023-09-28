import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import API_Client, { FetchResponse } from "../services/api-client";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const apiClient = new API_Client<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: genres,
    // initialData: { count: genres.length, results: genres, next: null },
  });
export default useGenres;
