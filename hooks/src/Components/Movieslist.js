import React from 'react'
import Moviescard from './Moviescard'

function Movieslist({movies, search,rating}) {
  return (
    <div className='list'>
{movies.filter((mv)=>mv.title.toLowerCase().includes(search.toLowerCase())&& mv.rate>=rating).map((el)=><Moviescard el={el}/>)}
    </div>
  )
}

export default Movieslist