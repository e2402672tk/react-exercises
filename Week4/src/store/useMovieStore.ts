import { create } from "zustand";

interface Movie {
  id: number;
  title: string;
  watched: boolean;
}

interface MovieStore {
  movies: Movie[];
  toggleWatched: (id: number) => void;
}

export const useMovieStore = create<MovieStore>((set) => ({
  movies: [
    { id: 1, title: "Scarface", watched: true },
    { id: 2, title: "Menace II Society", watched: false },
    { id: 3, title: "Boyz in the Hood", watched: true },
    { id: 4, title: "The Dark Knight", watched: false },
  ],

  toggleWatched: (id) =>
    set((state) => ({
      movies: state.movies.map((movie) =>
        movie.id === id
          ? { ...movie, watched: !movie.watched }
          : movie
      ),
    })),
}));