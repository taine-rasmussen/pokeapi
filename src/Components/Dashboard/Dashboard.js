import React, { useEffect } from 'react'

export const Dashboard = (props) => {

   const {
      setAllPokemon,
      singlePokemon,
      setSinglePokemon,
      setFormResponse,
      formResponse,
      setView
	} = props


// useEffect(() => {
//    let id = singlePokemon.id
//  fetch(`http://pokeapi.co/api/v2/pokemon/${id}`)
// 			 .then(response => response.json())
// 			 .then(form => setFormResponse(form))

//    console.log(formResponse)
// }, [])

   return (
      <div>
       {singlePokemon == null ? 'loading...' : singlePokemon.name}
      </div>
   )
}


