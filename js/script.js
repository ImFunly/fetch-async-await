const search = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const resetBtn = document.getElementById("resetBtn");
const pokemonList = document.getElementById("app");

document.addEventListener("DOMContentLoaded", async function () {
  // Entendemos que en los botones debemos hacer funciones aunque no entendemos bien como usar "offset=${}"
  searchBtn.addEventListener("click", () => {});
  prevBtn.addEventListener("click", () => {});
  nextBtn.addEventListener("click", () => {});
  resetBtn.addEventListener("click", () => {});

  const getPokemons = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5");
      // console.log(response);
      if (!response.ok) {
        throw new Error("Ha surgido un error", response.status);
      }
      const data = await response.json();
      data.results.forEach((pokemon) => {
        const containerP = document.createElement("div");
        const fotog = document.createElement("img");
        fotog.src = pokemon.url; // No sabemos llegar hasta la imagen, ya que se abre otro apartado de la API donde se encuentra la imagen
        containerP.appendChild(fotog);

        const name = document.createElement("p");
        name.textContent = `Nombre: ${pokemon.name}`;
        containerP.appendChild(name);

        pokemonList.appendChild(containerP);
      });
    } catch (error) {
      console.error("Error al obtener la información de los pokemons:", error);
    }
  };
  getPokemons();
  const pokemonData = await getPokemons();
  console.log(pokemonData);
});
