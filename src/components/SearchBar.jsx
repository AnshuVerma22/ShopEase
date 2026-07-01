import "../styles/SearchBar.css";
// import { useState } from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  // const [search, setSearch] = useState("");

  return (
    <section className="search">
      <h2>🔍 Search Products</h2>

      <input
      type="text"
      placeholder="Search your favourite product..."
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
      />
      {searchTerm && (
  <button onClick={() => setSearchTerm("")}>
    Clear
  </button>
)}
      <p>You typed: {searchTerm}</p>
      <p>Uppercase: {searchTerm.toUpperCase()}</p>
      <p>Characters: {searchTerm.length}</p>
      <p>
        {searchTerm === ""
          ? "Please enter a product name."
          : `Searching for: ${searchTerm}`}
      </p>
    </section>
  );
}

export default SearchBar;