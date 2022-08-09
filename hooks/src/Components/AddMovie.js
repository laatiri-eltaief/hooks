import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

function AddMovie({addmovie}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title,setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [posterUrl, setPosterUrl] = useState("")
    const [rate, setRate] = useState(0)
   
  return (
    <div>
        <>
        <Button className='bttn' style={{background:'black', color:"white"}} variant="primary" onClick={handleShow}>
        Add New Movie
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
  <Modal.Header closeButton>
    <Modal.Title>Add Movie</Modal.Title>
  </Modal.Header>
  <label>Title</label>
       <input type="text" value={title} onChange={(event)=>setTitle(event.target.value)}></input>
       <label>Description</label>
       <input type="text" value={description} onChange={(event)=>setDescription(event.target.value)}></input>
       <label>PosterURL</label>
       <input type="text" value={posterUrl} onChange={(event)=>setPosterUrl(event.target.value)}></input>
       <label>Rating</label>
       <input type="number" value={rate} onChange={(event)=>setRate(event.target.value)}></input>

  <Modal.Body>
    <p>Modal body text goes here.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>Close</Button>
    <Button variant="primary" onClick={()=>{addmovie({id:Math.random(),title,description,posterUrl,rate});handleClose()}}>Add</Button>
  </Modal.Footer>
</Modal> 
</>
    </div>
  )
}

export default AddMovie