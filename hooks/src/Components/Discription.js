import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
function Discription ({movies}) {
  let {id}=useParams()
    let navigate=useNavigate();
  return (
    <div style={{textAlign:'center'}}>
    <button className='btn btn-success' style={{}} onClick={()=>navigate('/movies')}>Back</button>
{movies.filter((movie)=>movie.id==id).map((movie)=>
<div >
     <h1>{movie.title}</h1>
       <p>{movie.description}</p>
       <p>Rating : {movie.rate}</p> 
      <iframe width="967" height="544" src={movie.trailer} 
title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>
</div>
)}
</div>
)
}


export default Discription
