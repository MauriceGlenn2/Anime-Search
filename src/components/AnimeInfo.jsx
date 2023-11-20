import React from 'react'
import { useParams } from 'react-router-dom'

function AnimeInfo({ animes }) {
 const { id } = useParams();

  return (
    <div>
      <h1 className='animeInfo'>{animes}</h1>
      </div>
  )
}

export default AnimeInfo