import type { Movie } from "@/types"
import MovieCard from "./movie-card"

interface MovieGridProps {
  movies: Movie[]
}

export default function MovieGrid({ movies }: MovieGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}
