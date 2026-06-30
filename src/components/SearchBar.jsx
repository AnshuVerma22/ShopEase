import "../styles/SearchBar.css";
import { useState } from "react";

function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <section className="search">
      <h2>🔍 Search Products</h2>

      <input
      type="text"
      placeholder="Search your favourite product..."
      value={search}
      onChange={(event) => setSearch(event.target.value)}
      />

      <p>You typed: {search}</p>
      <p>Uppercase: {search.toUpperCase()}</p>
      <p>Characters: {search.length}</p>
      <p>
        {search === ""
          ? "Please enter a product name."
          : `Searching for: ${search}`}
      </p>
    </section>
  );
}

export default SearchBar;