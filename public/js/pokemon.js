let tiposColores = [
    {
    tipo: 'normal',
    color:'#db7807'
    },
    {
      tipo: 'water',
      color:'#0828fc'
    },
    {
      tipo: 'fire',
      color:'#fc080c'
    },
    {
      tipo: 'grass',
      color:'#1eff05'
    },
    {
      tipo: 'electric',
      color:'#e5fa02'
    },
    {
      tipo: 'ice',
      color:'#91fff4'
    },
    {
      tipo: 'dragon',
      color:'#08CDB8'      
    },
    {
      tipo: 'fighting',
      color:'#5d8c87'
    },
    {
      tipo: 'poison',
      color:'#cf0250'
    },
    {
      tipo: 'ground',
      color:'#6e4623'
    },
    {
      tipo: 'flying',
      color:'#a2dbc8'
    },
    {
      tipo: 'psychic',
      color:'#400136'
    },
    {
      tipo: 'bug',
      color:'#61b05a'
    },
    {
      tipo: 'rock',
      color:'#6b696a'
    },
    {
      tipo: 'ghost',
      color:'#6b405e'
    },
    {
      tipo: 'dark',
      color:'#000000'
    },
    {
      tipo: 'sinister',
      color:'#e0c97e'
    },
    {
      tipo: 'steel',
      color:'#b0aaa5'
    },
    {
      tipo: 'fairy',
      color:'#cc99bd'
    }              
];
let color = '';
let pokemons = []
        let pokemonIndividual = []
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then( async (resp) => {            
            let pokemons = await resp.json();
            console.log(pokemons);
            
            let contenedorPrincipal = document.querySelector('.contenedor2');

            pokemons.results.forEach(pokemon => {
                fetch(pokemon.url)
                .then( async (resp) => {            
                    let pokemonIndividual = await resp.json();
                    console.log(pokemonIndividual);
                    let contenedorPokemon = document.createElement('div');
                    contenedorPokemon.className = 'contenedor-pokemon';         

                    let boton = document.createElement('button');                    
                    contenedorPokemon.className = 'contenedor-pokemon';            

                    let nombre = document.createElement('h2');                    
                    nombre.textContent = pokemonIndividual.name; // Puedes cambiar el texto del botón aquícontenedorPokemon¿                        
                    contenedorPokemon.appendChild(boton);
                    boton.appendChild(nombre);
                    let contenedorDetalles = document.createElement('div');
                    contenedorDetalles.className = 'contenedor-detalles'; 
                    boton.appendChild(contenedorDetalles);
                    let tipos = document.createElement('div');
                    tipos.className = 'tipos'; 
                    contenedorDetalles.appendChild(tipos);

                    tiposColores.forEach(response => {
                        if(response.tipo == pokemonIndividual.types[0].type.name){
                            color = response.color;
                        }
                    });
                    contenedorPokemon.style.background = color;
                    pokemonIndividual.types.forEach(respuestaTipos => {
                        let tipo = respuestaTipos.type.name;                        
                        let poke = document.createElement('div');
                        poke.style.background = color;         
                        poke.className = 'poli';
                        tipos.className = 'poke'; 
                        tipos.appendChild(poke);
                        let nameTipo = document.createElement('h3');                        
                        nameTipo.textContent = tipo;
                        poke.appendChild(nameTipo);
                        
                    });
                    
                    let imagen = document.createElement('div');

                    imagen.innerHTML = `<img src="${pokemonIndividual.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}">`;
                    contenedorDetalles.appendChild(imagen);
                    contenedorPrincipal.appendChild(contenedorPokemon);
                    

                });
            });
        });

