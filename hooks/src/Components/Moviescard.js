import React from 'react'
import { Button, Card } from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';
import '../App.css'

function Moviescard({el}) {
  return (
    <div>
        <Card style={{ width:'300px', heigth:'500px'}} className='card'>
  <Card.Img style={{ heigth:'400px'}} className='img'  src={el.posterUrl} />
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>
    <Card.Text>
    Interstellar, ou Interstellaire  Michael Caine, Casey Affleck et Matt Damon.
    </Card.Text>
    <Card.Text>
    <StarRatingComponent 
          name="movie" 
          value = {el.rate}
    />
    </Card.Text>
    <Button style={{background:'black', color:"grey"}} variant="primary" >Trailer</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default Moviescard