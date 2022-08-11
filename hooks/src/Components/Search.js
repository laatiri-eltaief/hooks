import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

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