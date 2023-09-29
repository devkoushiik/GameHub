import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import API_Client from "../services/api-client";
import { Genre } from "../entities/Genre";

const apiClient = new API_Client<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll,
    staleTime: ms("24h"), // 24h
    initialData: genres,
    // initialData: { count: genres.length, results: genres, next: null },
  });
export default useGenres;
