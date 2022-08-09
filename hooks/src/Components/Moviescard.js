import React from 'react'
import { Button, Card } from 'react-bootstrap'

function Moviescard({el}) {
  return (
    <div>
        <Card className='card'>
  <Card.Img className='img' variant="top" src={el.posterUrl} />
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>
    <Card.Text>
    Interstellar, ou Interstellaire  Michael Caine, Casey Affleck et Matt Damon.
    </Card.Text>
    <Card.Text>Rate: {el.rate}</Card.Text>
    <Button style={{background:'black', color:"grey"}} variant="primary" >Trailer</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default Moviescard