import { useRef, useState } from "react";
import { type Image } from "../interfaces/Image.interface";
import { getImagesByQuery } from "../actions/get-images-by-query.action";

//Podemos ponerlo fuera para que no se rerenderice cada vez que cambia de estado
//const imageCache: Record<string, Image[]> = {};

export function useImages() {
  const [searches, setSearches] = useState<string[]>([]);
  const [images, setImages] = useState<Image[]>([]);
  const imageCache = useRef<Record<string, Image[]>>({});

  const handlePrevSearchClick = async (term: string) => {
    if (imageCache.current[term]) {
      setImages(imageCache.current[term]);
      return;
    }

    const images = await getImagesByQuery(term);
    setImages(images);
    //Añadimos elementos a la pseudo caché
    imageCache.current[term] = images;
  };

  const handleSearch = async (query: string) => {
    //convertir a mínusculas y eliminar espacios en blanco
    const q = query.trim().toLowerCase();

    //query no está vacío
    if (q.length === 0) return;

    //evitar búsquedas duplicadas
    if (searches.find((c: string) => c.toLowerCase() === q.toLowerCase()))
      return;

    //actualizar searches agregando el núvo término al inicio y limitando a 8 elementos máximo
    const newValues = [q, ...searches].slice(0, 8);
    setSearches(newValues);

    const images = await getImagesByQuery(q);
    setImages(images);

    //Añadimos elementos a la pseudo caché
    imageCache.current[query] = images;
  };

  return { images, searches, handlePrevSearchClick, handleSearch };
}
