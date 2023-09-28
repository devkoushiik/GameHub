import { useQuery } from "@tanstack/react-query";
import API_Client, { FetchResponse } from "../services/api-client";
import platform from "../data/platform";
import ms from "ms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new API_Client<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24h
    initialData: platform,
  });

export default usePlatforms;
