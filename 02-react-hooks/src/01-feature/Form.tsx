type FilterTag = "dog" | "cat";

type FormProps = {
  query: string;
  onQueryChange: (query: string) => void;
  onTagToggle: (tag: FilterTag, checked: boolean) => void;
};

export default function Form({
  query,
  onQueryChange,
  onTagToggle,
}: FormProps) {
  const words = query.split(" ").filter(Boolean);

  return (
    <form className="filters">
      <div className="search-field">
        <label className="search-field__label" htmlFor="searchInput">
          Search
        </label>
        <input
          className="search-field__input"
          id="searchInput"
          name="query"
          type="text"
          onChange={(event) => onQueryChange(event.currentTarget.value)}
          placeholder="Type a topic or keyword"
          value={query}
        />
      </div>
      <div className="filters__tags">
        <label className="tag-filter">
          <input
            className="tag-filter__input"
            type="checkbox"
            value={query}
            onChange={(event) => onTagToggle("dog", event.currentTarget.checked)}
            checked={words.includes("dog")}
          />
          <span className="tag-filter__label">dog</span>
        </label>
        <label className="tag-filter">
          <input
            className="tag-filter__input"
            type="checkbox"
            value={query}
            onChange={(event) => onTagToggle("cat", event.currentTarget.checked)}
            checked={words.includes("cat")}
          />
          <span className="tag-filter__label">cat</span>
        </label>
      </div>
    </form>
  );
}
