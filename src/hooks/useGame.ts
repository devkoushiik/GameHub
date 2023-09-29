import { useQuery } from "@tanstack/react-query";
import API_Client from "../services/api-client";
import { Game } from "./useGames";

const apiClient = new API_Client<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGame;
