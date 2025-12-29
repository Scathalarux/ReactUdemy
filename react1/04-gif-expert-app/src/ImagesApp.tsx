import { SearchBar } from "./shared/components/SearchBar";
import { CustomHeader } from "./shared/components/CustomHeader";
import { PreviousSearchers } from "./images/components/PreviousSearchers";
import { ImageList } from "./images/components/ImageList";

import { useImage } from "./images/hooks/useImages";

export function ImagesApp() {
  const { images, searches, handlePrevSearchClick, handleSearch } = useImage();

  return (
    <>
      {/* título */}
      <CustomHeader title="Images App" subtitle="Descubre imágenes" />

      {/* input */}
      <SearchBar placeholder="Buscar imágenes..." onNewSearch={handleSearch} />

      <PreviousSearchers
        prevSearches={searches}
        onPrevSearchClick={handlePrevSearchClick}
      />

      {/* listado de items */}
      <ImageList images={images} />
    </>
  );
}
