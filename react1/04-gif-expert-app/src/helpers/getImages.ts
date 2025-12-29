export type Image = {
  id: string;
  url: string;
  title: string;
};
export const getImagesAsync = async (item: string, limit: number) => {
  //const url = `https://cataas.com/cat/${item}?position=center`;
  const url = `https://boringapi.com/api/v1/photos/?search=${item}&page=1&limit=${limit}&sort_by=id&sort_order=desc`;

  const response = await fetch(url);
  const { photos } = await response.json();

  const newImages = photos.map((img: Image) => ({
    id: img.id,
    url: img.url,
    title: img.title
  }));

  console.log(newImages);
  return newImages;
};
