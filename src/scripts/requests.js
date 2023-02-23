export async function consomePokeAPI() {
    // Seleciona o elemento que representa o loading da requisição
    const loading = document.querySelector('.loading')
    const form = document.querySelector('.hidden');

    // Faz a requisição na API
    const pokemonsDaAPI = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
      .then(
        /*  Converte o retorno para um objeto Javascript válido */
        response => response.json()
      )
      .catch(
        /* Caso haja algum erro, retornamos ele no console */
        error => console.log(error)
      )
    
    // Independente da requisição ser um sucesso, ou um erro, removeremos o loading da tela e adicionaremos a barra de pesquisa
    setTimeout( () => {
      loading.classList.remove('loading');
      loading.classList.add('hidden');
      form.classList.remove('hidden');
      form.classList.add('show');
    }, 100)

    // Retorna esse valor convertido
    return pokemonsDaAPI
}

export async function getPokemonByName (pokemonName) {
    const pokemonFound = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => response.json())
    .then(res => {
        return res.name;
    })

    return pokemonFound;
}