import React from 'react'

export const LandingHeader = (props) => {

const { 
   setPokemonView,
   setView
} = props

   const handlePokemonClick = () => {
      setPokemonView(false)
      setView(true)
   }

   return (
      <div className=" landing-header-container">
         <div className=" landing-header-title">
            <h1>Pokedex</h1>
         </div>
         <div className=" landing-header-menu">
            <h3 onClick={handlePokemonClick}>Pokemon</h3>
            <h3>Items</h3>
         </div>
      </div>
   )
}

