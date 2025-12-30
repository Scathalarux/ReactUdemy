import type { Image } from "../interfaces/Image.interface";
type ImageListProps = {
  images: Image[];
};
export function ImageList({ images }: ImageListProps) {
  return (
    <div className="items-container">
      {images.map((image: Image) => (
        <div key={image.id} className="item">
          <img src={image.url} alt={image.title} />
          <h3>{image.title}</h3>
          <p>{image.description}</p>
        </div>
      ))}
    </div>
  );
}