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


  return (
    <div className="App">
      {view ? <Dashboard
        setAllPokemon={setAllPokemon}
        allPokemon={allPokemon}
        singlePokemon={singlePokemon}
        setSinglePokemon={setSinglePokemon}
        formResponse={formResponse}
        setView={setView}
        setFormResponse={setFormResponse}
        setPokemonView={setPokemonView}
        pokemonView={pokemonView}
      /> : <Landing 
        setAllPokemon={setAllPokemon}
        allPokemon={allPokemon}
        singlePokemon={singlePokemon}
        setSinglePokemon={setSinglePokemon}
        formResponse={formResponse}
        setFormResponse={setFormResponse}
        setView={setView}
        setPokemonView={setPokemonView}
      />}
    </div>
  );
}

export default App;
