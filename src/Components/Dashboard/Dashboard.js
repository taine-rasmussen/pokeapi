import React, { useState, useEffect } from 'react'
import './Dashboard.css'

//Components
import { AllPokemon } from './AllPokemon'
import { SinglePokemon } from './SinglePokemon'


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
      getData
	} = props

   useEffect(() => {
      getData()
   }, [])

   return (
      <div className="dashboard-conatiner">
         {pokemonView ? (
            <SinglePokemon
               singlePokemon={singlePokemon}
               formResponse={formResponse}
            />
            ) : (
            <AllPokemon
             allPokemon={allPokemon}s
            />
            )}
      </div>
   )
}


