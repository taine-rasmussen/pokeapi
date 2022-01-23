import React, { useState, useEffect } from 'react'

export const LandingSearch = (props) => {

	const {
		input,
		setInput,
		setSinglePokemon,
		singlePokemon,
		setFormResponse
	} = props

	// updates input with string from user input
	const handleChange = (e) => {
		setInput(e.target.value)
	}

	// GET request to pokeAPI with users search / updates singlePokemon/formResponse state with response
	const handleSubmit = (e) => {
		e.preventDefault()
		fetch(`http://pokeapi.co/api/v2/pokemon/${input}`)
			 .then(response => response.json())
			 .then(pokemon => console.log('pokemon', pokemon.id))

		
			// fetch(`https://pokeapi.co/api/v2/pokemon-form/${singlePokemon.id}/`) failing to find .id - try move this call to an useEffect on Dashboard load
			//  .then(response => response.json())
			//  .then(form => console.log('form', form))
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
