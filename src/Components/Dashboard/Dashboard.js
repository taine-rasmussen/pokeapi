import React, { useState } from 'react'
import './Dashboard.css'

//Components
import { AllPokemon } from './AllPokemon'

export const Dashboard = (props) => {

   const {
      setAllPokemon,
      singlePokemon,
      setSinglePokemon,
      setFormResponse,
      formResponse,
      setView,
      allPokemon,
      pokemonView,
      setPokemonView,
	} = props


   return (
      <div className="dashboard-conatiner">
         {pokemonView ? `haven't done this yet` :  <AllPokemon allPokemon={allPokemon}s/>}
      </div>
   )
}


