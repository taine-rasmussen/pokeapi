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
      setView
	} = props

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

   return(
      <div className="landing-container">
         <LandingHeader />
         <LandingSearch 
            setInput={setInput}
            input={input}
            setSinglePokemon={setSinglePokemon}
            singlePokemon={singlePokemon}
            setFormResponse={setFormResponse}
            setView={setView}
         />
      </div>
   )
}