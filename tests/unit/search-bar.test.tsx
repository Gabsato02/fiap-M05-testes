import SearchBar from "@/components/search-bar";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, vi, it } from "vitest";

// Descrição do teste
describe("Searchbar component", () => {
    // Condição para satisfazer o teste
    it("should appear on screen", () => {
        // Cria uma função mock que simula o comportamento da função original
        const mockOnSearch = vi.fn();

        // Renderiza o componente na tela
        render(<SearchBar onSearch={mockOnSearch} />);

        // Busca o elemento pelo placeholder
        const searchInput = screen.getByPlaceholderText("Search for movies by title or genre...");

        // Espera que o element esteja no documento
        expect(searchInput).toBeInTheDocument();
    })

    it("should call onSearch when the button is clicked", () => {
        const mockOnSearch = vi.fn();

        render(<SearchBar onSearch={mockOnSearch} />);

        const searchInput = screen.getByPlaceholderText("Search for movies by title or genre...");
        
        // Busca o elemento pela aria-role do elemento
        const searchButton = screen.getByRole("button");

        // Dispara eventos do DOM - neste caso, altera o valor do input
        fireEvent.change(searchInput, { target: { value: "Inception"}});

        fireEvent.click(searchButton);
        
        // Espera que a função mock tenha sido chamada com o valor correto
        expect(mockOnSearch).toHaveBeenCalledWith("Inception")
    })
})
