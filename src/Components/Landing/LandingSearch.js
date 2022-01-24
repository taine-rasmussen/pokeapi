import React, { useState, useEffect } from 'react'

export const LandingSearch = (props) => {

	const {
		setSinglePokemon,
		singlePokemon,
		setFormResponse
	} = props

  const [input, setInput] = useState('');


	// updates input with string from user input
	const handleChange = (e) => {
		setInput(e.target.value)
	}

	// GET request to pokeAPI with users search input / updates singlePokemon/formResponse state with response
	const handleSubmit = (e) => {
		e.preventDefault()
		fetch(`http://pokeapi.co/api/v2/pokemon/${input}`)
			 .then(response => response.json())
			 .then(pokemon => setSinglePokemon(pokemon))
		fetch(`https://pokeapi.co/api/v2/pokemon-form/${input}/`)
			 .then(response => response.json())
			 .then(form => setFormResponse(form))
			setInput('')
	}

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
									<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/143.png'/>
               </form>
            </div>
         </div>
         
      </div>
   )
}
