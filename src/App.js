import './App.css';
import React, { useState } from 'react'

// Components
import { Landing }  from './Components/Landing/Landing'
import { Dashboard } from './Components/Dashboard/Dashboard'

function App() {

	 const [allPokemon, setAllPokemon] = useState();
	 const [singlePokemon, setSinglePokemon] = useState();
	 const [formResponse, setFormResponse] = useState()
   const [view, setView] = useState(false)

  return (
    <div className="App">

      {view ? <Dashboard
        setAllPokemon={setAllPokemon}
        allPokemon={allPokemon}
        singlePokemon={singlePokemon}
        setSinglePokemon={setSinglePokemon}
        formResponse={formResponse}
        setFormResponse={setFormResponse} 
      /> : <Landing 
        setAllPokemon={setAllPokemon}
        allPokemon={allPokemon}
        singlePokemon={singlePokemon}
        setSinglePokemon={setSinglePokemon}
        formResponse={formResponse}
        setFormResponse={setFormResponse}
        setView={setView}
      />}
    </div>
  );
}

export default App;
