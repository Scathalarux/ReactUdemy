import axios from "axios";

export const ImageApi = axios.create({
  baseURL: "https://boringapi.com/api/v1/",
});
