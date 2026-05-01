import { useState } from "react";
import { useMovieStore } from "../store/useMovieStore";

export function MovieList() {
  const movies = useMovieStore((state) => state.movies);
  const toggleWatched = useMovieStore((state) => state.toggleWatched);

  const [filterType, setFilterType] = useState<"all" | "watched" | "unwatched">("all");

  let filteredMovies = movies;

  if (filterType === "watched") {
    filteredMovies = movies.filter((movie) => movie.watched);
  }

  if (filterType === "unwatched") {
    filteredMovies = movies.filter((movie) => !movie.watched);
  }

  return (
    <div>
      <h2>Movie List</h2>

      <button onClick={() => setFilterType("all")}>All</button>
      <button onClick={() => setFilterType("watched")}>Watched</button>
      <button onClick={() => setFilterType("unwatched")}>Unwatched</button>

      {filteredMovies.map((movie) => (
        <div key={movie.id}>
          <span>
            {movie.title} - {movie.watched ? "Watched" : "Unwatched"}
          </span>

          <button onClick={() => toggleWatched(movie.id)}>
            Toggle watched
          </button>
        </div>
      ))}
    </div>
  );
}