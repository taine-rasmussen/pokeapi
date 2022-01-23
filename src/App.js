import './App.css';
import React, { useState } from 'react'

// Components
import Landing  from './Components/Landing/Landing'

function App() {

  const [input, setInput] = useState('');
	 const [allPokemon, setAllPokemon] = useState();
	 const [singlePokemon, setSinglePokemon] = useState();
	 const [formResponse, setFormResponse] = useState()


  return (
    <div className="App">
      <Landing 
        setInput={setInput}
        input={input}
        setAllPokemon={setAllPokemon}
        allPokemon={allPokemon}
        singlePokemon={singlePokemon}
        setSinglePokemon={setSinglePokemon}
        formResponse={formResponse}
        setFormResponse={setFormResponse}
      />
    </div>
  );
}

export default App;
