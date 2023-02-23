import { consomePokeAPI, getPokemonByName } from "./requests.js";


setTimeout( () => {
    async function renderizaPokemons() {
        const ulTag = document.querySelector('.pokemon__list')
    
        ulTag.innerHTML = '';
    
        // Aqui utilizaremos o await para aguardar a resposta da função
        const listaDePokemons = await consomePokeAPI()
    
        // Agora é só iterar sob o array e renderizar cada pokemon
        listaDePokemons.results.forEach(pokemon => {
            // "Fatia" o número do pokemon na pokedex a partir da URL de cada pokemon
            const numeroNaPokedex = pokemon.url.slice(34, -1)
    
            ulTag.insertAdjacentHTML('beforeend', `
                <li class="pokemon__card">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${pokemon.name}>
                    <span>${pokemon.name}</span>
                </li>
            `)
        })
    }
    renderizaPokemons()
}, 800)


function searchPokemon () {
    const input = document.querySelector('input');

    input.addEventListener('keyup', async (e) => {
        
        e.preventDefault();

        const pokemonEncontrado = await getPokemonByName(input.value.trim());

        const listaDePokemons = await consomePokeAPI()
        
        const ulTag = document.querySelector('.pokemon__list')
        listaDePokemons.results.forEach(pokemon => {
            if (pokemonEncontrado == pokemon.name) {
                ulTag.innerHTML = '';

                const numeroNaPokedex = pokemon.url.slice(34, -1)

                ulTag.insertAdjacentHTML('beforeend', `
                <li class="pokemon__card">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png" alt=${pokemon.name}
                    <span>${pokemon.name}</span>
                </li>
            `)
            }
        })
    })
}

searchPokemon()