type PreviousSearchersProps = {
  prevSearches: string[];
  onPrevSearchClick: (term: string) => void;
};
export function PreviousSearchers({
  prevSearches,
  onPrevSearchClick,
}: PreviousSearchersProps) {
  return (
    <div className="previous-searches">
      <h2>Búsquedas previas</h2>
      <ul className="previous-searches-list">
        {prevSearches.map((searchText) => (
          <li key={searchText} onClick={() => onPrevSearchClick(searchText)}>
            {searchText}
          </li>
        ))}
      </ul>
    </div>
  );
}
