import React from 'react'

export const SinglePokemon = (props) => {

   const {
      singlePokemon,
      formResponse
   } = props

   
   if(!singlePokemon && !formResponse) {
      return ''
   } else {

      const getSprite = () => {

      }


      return (
         <div className="single-container">
            <div className="single-card-container">
               {singlePokemon ? singlePokemon.name : 'loading...'}
               <img src={formResponse.sprites.front_default}/>
            </div>
         </div>
      )
   }
}
