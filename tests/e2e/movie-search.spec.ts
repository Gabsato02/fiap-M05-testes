import { expect, test } from "@playwright/test";

// Descreve o teste
test.describe("Search for a movie", () => {
    // Condição para satisfazer o teste
    test("should find a movie by it's title", async ({ page }) => {
        // Navega para a página inicial
        await page.goto("/");

        const movieName = "Inception"

        // Espera que o elemento de busca esteja visível, depois preenche o campo de busca
        await page.getByPlaceholder("Search for movies by title or genre...").fill(movieName)

        // Espera que o botão de busca esteja visível e clica nele
        await page.getByRole("button", { name: "Search now" }).click()

        // Espera um tempo para que a busca seja processada
        await page.waitForTimeout(1000)

        // Verifica se a página de resultados de busca está visível e contém o nome do filme
        await expect(page.getByText(`Search Results for "${movieName}"`)).toBeVisible();
        await expect(page.getByText(movieName, {exact: true})).toBeVisible();
        
        // Limpa o texto do campo de busca
        await page.getByPlaceholder("Search for movies by title or genre...").fill("")

        // Clica no botão de busca novamente
        await page.getByRole("button", { name: "Search now" }).click()

        // Verifica se a página de resultados de busca está visível e contém o texto "Popular Movies"
        await expect(page.getByText(`Popular Movies`)).toBeVisible()
    })

    test("should navigate to the movie details page and watch the trailer", async ({ page }) => {
        await page.goto("/");

        const movieName = "Inception"
        
        await page.getByText(movieName, {exact: true}).click()

        await page.waitForTimeout(5000)

        await expect(page.url()).toContain(`/movies/movie-1`)

        await page.getByRole("button", { name: "Watch Trailer" }).click()

        await expect(page.locator("iframe")).toBeVisible()
    })
})