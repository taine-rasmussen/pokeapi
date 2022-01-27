import React, { useState } from 'react'

export const AllPokemon = (props) => {

   const {
      allPokemon,
   } = props

   const [urls, setUrls] = useState([])

   console.log('test', allPokemon)


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
