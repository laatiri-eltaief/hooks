import React from 'react'
import Moviescard from './MoviesCard'

function MovieList({movies, search}) {
  return (
    <div className='list'>
{movies.filter((mv)=>mv.title.toLowerCase().includes(search.toLowerCase())).map((el)=><Moviescard el={el}/>)}
    </div>
  )
}

export default MoviesList