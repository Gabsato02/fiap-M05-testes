import MovieCard from "@/components/movie-card";
import { AuthProvider } from "@/context/auth-context";
import { FavoritesProvider } from "@/context/favorites-context";
import { Movie } from "@/types";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

const movieMock: Movie = {
  id: "movie-1",
  title: "Inception",
  synopsis: "A thief who steals corporate secrets.",
  year: 2010,
  genre: ["Sci-Fi", "Action"],
  rating: 8.8,
  posterUrl: "/placeholder.svg?height=450&width=300&text=Inception",
  trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
};

describe("Movie Card snapshot", () => {
    it("should match the snapshot", () => {
        const { container } = render(
            <AuthProvider>
                <FavoritesProvider>
                    <MovieCard movie={movieMock} />
                </FavoritesProvider>
            </AuthProvider>
        );

        expect(container).toMatchSnapshot();
    })

    it("should match the snapshot when a movie has multiple genres", () => {
        const movieMockWithMultipleGenres: Movie = {
            ...movieMock,
            genre: ["Sci-Fi", "Action", "Adventure", "Drama"],
        };

        const { container } = render(
            <AuthProvider>
                <FavoritesProvider>
                    <MovieCard movie={movieMockWithMultipleGenres} />
                </FavoritesProvider>
            </AuthProvider>
        );

        // Gera um snapshot do componente renderizado e compara com o snapshot salvo
        expect(container).toMatchSnapshot();
    })
})