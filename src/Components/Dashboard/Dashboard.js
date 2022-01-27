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

   return (
      <div className="dashboard-conatiner">
       {singlePokemon == null ? 'loading...' : singlePokemon.name}
      </div>
   )
}


