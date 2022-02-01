import './App.css';
import React, { useState } from 'react'

// Components
import { Landing }  from './Components/Landing/Landing'
import { Dashboard } from './Components/Dashboard/Dashboard'

function App() {

	 const [allPokemon, setAllPokemon] = useState();
	 const [singlePokemon, setSinglePokemon] = useState(null);
	 const [formResponse, setFormResponse] = useState()
   const [view, setView] = useState(false)
   const [pokemonView, setPokemonView] = useState(false)

     // Updates allPokemon state with all pokemon data 
   const getData = () => {
		 fetch('http://pokeapi.co/api/v2/pokemon/?limit=151')
			 .then(response => response.json())
			 .then(allpokemon => setAllPokemon(allpokemon))
	 }

  return (
    <div className="App">
      {view ? (
        <Dashboard
          setAllPokemon={setAllPokemon}
          allPokemon={allPokemon}
          singlePokemon={singlePokemon}
          setSinglePokemon={setSinglePokemon}
          formResponse={formResponse}
          setView={setView}
          setFormResponse={setFormResponse}
          setPokemonView={setPokemonView}
          pokemonView={pokemonView}
          getData={getData}
        />
      ) : (
        <Landing 
          setAllPokemon={setAllPokemon}
          allPokemon={allPokemon}
          singlePokemon={singlePokemon}
          setSinglePokemon={setSinglePokemon}
          formResponse={formResponse}
          setFormResponse={setFormResponse}
          setView={setView}
          setPokemonView={setPokemonView}
        />
      )}
    </div>
  );
}

export default App;
