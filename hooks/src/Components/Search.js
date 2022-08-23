import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import {Link} from 'react-router-dom'

function Search({search ,setSearch,setRate}) {
  return (
    <div className="search" >
    <input  placeholder='Search movie..' value={search} type="text" onChange={(e)=>setSearch(e.target.value)}  />
    <label value="SEARCH">Search</label> 
    <StarRatingComponent 
          name="movie" 
          onStarClick={star =>setRate(star)}
    />
    </div>
  )
}

export default Search