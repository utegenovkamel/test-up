import type { AxiosRequestConfig } from "axios";
import axiosInstance from "../../shared/api/config";
import type {
  ListResponse,
  ServerErrorResponse,
} from "../../shared/types/server";
import type { Media } from "./types";

export async function getMedia(config?: AxiosRequestConfig<Media>) {
  const response = await axiosInstance.get<
    ListResponse<Media> | ServerErrorResponse
  >("", config);

  if ("Error" in response.data) {
    throw new Error(response.data.Error);
  }

  return response.data;
}
