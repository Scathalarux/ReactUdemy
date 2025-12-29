import { type ImageResponse } from "../interfaces/ImageResponse.interface";
import { type Image } from "../interfaces/Image.interface";
import { ImageApi } from "../api/image.api";

export const getImagesByQuery = async (query: string): Promise<Image[]> => {
  const response = await ImageApi<ImageResponse>(
    "photos/",
    {
      params: {
        search: query,
        page: 1,
        limit: 10,
      },
    }
  );
  console.log(response.data.photos);
  return response.data.photos.map((img) => ({
    file_size: img.file_size,
    id: img.id,
    url: img.url,
    title: img.title,
    description: img.description,
    height: img.height,
    width: img.width,
    updated_at: img.updated_at,
    created_at: img.created_at,
  }));
};
