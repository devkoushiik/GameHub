import { useQuery } from "@tanstack/react-query";
import API_Client from "../services/api-client";
import { Screenshot } from "../entities/ScreenShoot";

const useScreenshot = (gameId: number) => {
  const apiClient = new API_Client<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshot;
