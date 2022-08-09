import React from 'react'

function Search({search ,setSearch}) {
  return (
    <div className="search" >
    <input  placeholder='Search movie..' value={search} type="text" onChange={(e)=>setSearch(e.target.value)}  />
    <label value="SEARCH">Search</label> 
    </div>
  )
}

export default Search