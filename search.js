// search.js
import { loadMovies, setupPagination } from "./gallery.js";

export const handleSearch = () => {
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");

  searchButton.onclick = () => {
    const searchQuery = searchInput.value;
    loadMovies(searchQuery, 1); // Always start from page 1
  };
};
