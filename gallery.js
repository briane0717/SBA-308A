// gallery.js
import { fetchMovies } from "./api.js";
import { showMovieDetails } from "./movieDetail.js";

let currentPage = 1;
let currentSearchQuery = "";

export const displayMovies = (movies) => {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = ""; // Clear existing movies

  movies.forEach((movie) => {
    const movieElement = document.createElement("img");
    movieElement.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    movieElement.alt = movie.title;
    movieElement.addEventListener("click", () => showMovieDetails(movie.id));
    gallery.appendChild(movieElement);
  });
};

export const loadMovies = async (searchQuery = "", page = 1) => {
  currentSearchQuery = searchQuery;
  currentPage = page;

  const movies = await fetchMovies(searchQuery, page);
  displayMovies(movies);
};

export const setupPagination = (totalPages) => {
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;

  prevButton.onclick = () => {
    if (currentPage > 1) loadMovies(currentSearchQuery, currentPage - 1);
  };

  nextButton.onclick = () => {
    if (currentPage < totalPages)
      loadMovies(currentSearchQuery, currentPage + 1);
  };
};
