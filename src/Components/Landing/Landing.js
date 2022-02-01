import React,  { useState, useEffect }  from 'react';
import './Landing.css'

// Components
import { LandingHeader } from './LandingHeader'
import { LandingSearch } from './LandingSearch'

export const Landing = (props) => {

   const {
		input,
		setInput,
      setAllPokemon,
      singlePokemon,
      setSinglePokemon,
      setFormResponse,
      setView,
      setPokemonView
	} = props

   return(
      <div className="landing-container">
         <LandingHeader
            setPokemonView={setPokemonView}
            setView={setView}
         />
         <LandingSearch 
            setInput={setInput}
            input={input}
            setSinglePokemon={setSinglePokemon}
            singlePokemon={singlePokemon}
            setFormResponse={setFormResponse}
            setView={setView}
            setPokemonView={setPokemonView}
         />
      </div>
   )
}