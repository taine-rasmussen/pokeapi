import React, { useState, useEffect } from 'react'

export const LandingSearch = () => {

   const [input, setInput] = useState('')
	 const [allPokemon, setAllPokemon] = useState()

	// updates input with string from user input
	const handleChange = (e) => {
		setInput(e.target.value)
	}

	// Handles the form submit???
	const handleSubmit = (e) => {
		e.preventDefault()
	}

	// Updates allPokemon state with all pokemon data
	const getData = () => {
		fetch('http://pokeapi.co/api/v2/pokemon/')
  		.then(response => response.json())
  		.then(allpokemon => setAllPokemon(allpokemon))
	}

	// gets data on component load
	useEffect(() => {
		getData()
	}, [])

   return (
      <div className="search-container">
         <div className="search-card-container">
            <div className="search-header">
								<h1>Discover a Pokemon! DEFINE MVP</h1>
            </div>
            <div className="search-body">
               <form onSubmit={handleSubmit}>
                  <input
                     type="text"
                     placeholder="Enter Pokemon..."
                     value={input}
                     onChange={(e) => {handleChange(e)}}
                  /> 
                  <button>Search</button>
               </form>
            </div>
         </div>
         
      </div>
   )
}
