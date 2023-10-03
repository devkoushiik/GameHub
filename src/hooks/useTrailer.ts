import { useQuery } from "@tanstack/react-query";
import API_Client from "../services/api-client";
import { Trailer } from "../entities/Trailer";

const useTailers = (gameId: number) => {
  const apiClient = new API_Client<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ["trailer", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTailers;
