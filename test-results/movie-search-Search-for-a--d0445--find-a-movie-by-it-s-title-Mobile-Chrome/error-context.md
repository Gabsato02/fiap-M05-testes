# Test info

- Name: Search for a movie >> should find a movie by it's title
- Location: C:\Users\gabsa\Desktop\DEV\fiap-M05-testes\tests\e2e\movie-search.spec.ts:6:9

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: getByText('Search Results for "Inception"')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for getByText('Search Results for "Inception"')

    at C:\Users\gabsa\Desktop\DEV\fiap-M05-testes\tests\e2e\movie-search.spec.ts:22:75
```

# Page snapshot

```yaml
- banner:
  - link "MovieCatalog":
    - /url: /
  - button "Toggle menu"
- main:
  - heading "Movie Catalog" [level=1]
  - paragraph: Discover and explore your favorite movies. Search, save to favorites, and join the conversation.
  - textbox "Search for movies by title or genre..."
  - button "Search now"
  - heading "Popular Movies" [level=2]
  - link "Inception Add to favorites Inception 8.8/10 • 2010 A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O. Sci-Fi Action +1":
    - /url: /movies/movie-1
    - img "Inception"
    - button "Add to favorites"
    - heading "Inception" [level=3]
    - text: 8.8/10 • 2010
    - paragraph: A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.
    - text: Sci-Fi Action +1
  - link "The Shawshank Redemption Add to favorites The Shawshank Redemption 9.3/10 • 1994 Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency. Drama Crime":
    - /url: /movies/movie-2
    - img "The Shawshank Redemption"
    - button "Add to favorites"
    - heading "The Shawshank Redemption" [level=3]
    - text: 9.3/10 • 1994
    - paragraph: Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.
    - text: Drama Crime
  - link "The Dark Knight Add to favorites The Dark Knight 9/10 • 2008 When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice. Action Crime +1":
    - /url: /movies/movie-3
    - img "The Dark Knight"
    - button "Add to favorites"
    - heading "The Dark Knight" [level=3]
    - text: 9/10 • 2008
    - paragraph: When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.
    - text: Action Crime +1
  - link "Pulp Fiction Add to favorites Pulp Fiction 8.9/10 • 1994 The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption. Crime Drama":
    - /url: /movies/movie-4
    - img "Pulp Fiction"
    - button "Add to favorites"
    - heading "Pulp Fiction" [level=3]
    - text: 8.9/10 • 1994
    - paragraph: The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.
    - text: Crime Drama
  - 'link "The Lord of the Rings: The Return of the King Add to favorites The Lord of the Rings: The Return of the King 8.9/10 • 2003 Gandalf and Aragorn lead the World of Men against Sauron''s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring. Adventure Drama +1"':
    - /url: /movies/movie-5
    - 'img "The Lord of the Rings: The Return of the King"'
    - button "Add to favorites"
    - 'heading "The Lord of the Rings: The Return of the King" [level=3]'
    - text: 8.9/10 • 2003
    - paragraph: Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.
    - text: Adventure Drama +1
  - link "Forrest Gump Add to favorites Forrest Gump 8.8/10 • 1994 The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart. Drama Romance":
    - /url: /movies/movie-6
    - img "Forrest Gump"
    - button "Add to favorites"
    - heading "Forrest Gump" [level=3]
    - text: 8.8/10 • 1994
    - paragraph: The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.
    - text: Drama Romance
  - link "The Matrix Add to favorites The Matrix 8.7/10 • 1999 A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers. Action Sci-Fi":
    - /url: /movies/movie-7
    - img "The Matrix"
    - button "Add to favorites"
    - heading "The Matrix" [level=3]
    - text: 8.7/10 • 1999
    - paragraph: A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.
    - text: Action Sci-Fi
  - link "Goodfellas Add to favorites Goodfellas 8.7/10 • 1990 The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate. Biography Crime +1":
    - /url: /movies/movie-8
    - img "Goodfellas"
    - button "Add to favorites"
    - heading "Goodfellas" [level=3]
    - text: 8.7/10 • 1990
    - paragraph: The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.
    - text: Biography Crime +1
- contentinfo:
  - paragraph: © 2025 Movie Catalog. All rights reserved.
  - link "Terms of Service":
    - /url: "#"
  - link "Privacy Policy":
    - /url: "#"
  - link "Contact":
    - /url: "#"
- alert
- button "Open Next.js Dev Tools":
  - img
```

# Test source

```ts
   1 | import { expect, test } from "@playwright/test";
   2 |
   3 | // Descreve o teste
   4 | test.describe("Search for a movie", () => {
   5 |     // Condição para satisfazer o teste
   6 |     test("should find a movie by it's title", async ({ page }) => {
   7 |         // Navega para a página inicial
   8 |         await page.goto("/");
   9 |
  10 |         const movieName = "Inception"
  11 |
  12 |         // Espera que o elemento de busca esteja visível, depois preenche o campo de busca
  13 |         await page.getByPlaceholder("Search for movies by title or genre...").fill(movieName)
  14 |
  15 |         // Espera que o botão de busca esteja visível e clica nele
  16 |         await page.getByRole("button", { name: "Search now" }).click()
  17 |
  18 |         // Espera um tempo para que a busca seja processada
  19 |         await page.waitForTimeout(1000)
  20 |
  21 |         // Verifica se a página de resultados de busca está visível e contém o nome do filme
> 22 |         await expect(page.getByText(`Search Results for "${movieName}"`)).toBeVisible();
     |                                                                           ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  23 |         await expect(page.getByText(movieName, {exact: true})).toBeVisible();
  24 |         
  25 |         // Limpa o texto do campo de busca
  26 |         await page.getByPlaceholder("Search for movies by title or genre...").fill("")
  27 |
  28 |         // Clica no botão de busca novamente
  29 |         await page.getByRole("button", { name: "Search now" }).click()
  30 |
  31 |         // Verifica se a página de resultados de busca está visível e contém o texto "Popular Movies"
  32 |         await expect(page.getByText(`Popular Movies`)).toBeVisible();
  33 |     })
  34 |
  35 |     test("should navigate to the movie details page and watch the trailer", async ({ page }) => {
  36 |         await page.goto("/");
  37 |
  38 |         const movieName = "Inception"
  39 |         
  40 |         await page.getByText(movieName, {exact: true}).click();
  41 |
  42 |         await expect(page.url()).toContain(`/movie/${movieName.toLowerCase().replace(/ /g, "-")}`);
  43 |     })
  44 | })
```