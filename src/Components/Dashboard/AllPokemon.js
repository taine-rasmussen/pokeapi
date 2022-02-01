import React, { useState } from 'react'

export const AllPokemon = (props) => {

   const {
      allPokemon,
   } = props

   const [urls, setUrls] = useState([])


   // Need a function maps over each pokemon calling the form url and getting the sprite path to be used as an image
   // Is there an easier way - is there an API just for images that would save this work?
   // ??????
// ternay the map to check for allPokemon to be defined before mapping - all pokemon state is loading slower becasuse getData has been moved to a useEffect inside Dashboard
   return (
      <div className='allpokemon-container'>
         {allPokemon.results.map((pokemon, i) => {
           return(
            <div className='single-pokemon-container' key={i}>
               {pokemon.name}
            </div>
         )})}
      </div>
   )
}
