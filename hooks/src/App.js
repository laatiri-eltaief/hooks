import { useState } from 'react';
import './App.css';
import Addmovie from './Components/AddMovie';
import Movieslist from './Components/Movieslist';
import { Data } from './Data';
import {Routes,Route} from 'react-router-dom'
import Discription from './Components/Discription';
import Home from './Navbar/Home';
import Contact from './Navbar/Contact';
import About from './Navbar/About';
import Nave from './Components/Nave';

function App() {
  const [movies, setMovies] = useState(Data)
  const [search,setSearch]=useState ("")
  const [rate, setRate] = useState(0)
  const addmovie=(newM)=>setMovies([...movies,newM])


  return (
    <div className="App">
      <Nave search={search} setSearch={setSearch} setRate={setRate}/> 
      <Addmovie addmovie={addmovie}/>
      <Movieslist movies={movies} search={search} rating={rate} />
      <Routes>
        <Route path='/description'element={<Discription/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/movies' element={<Movieslist movies={movies} search={search}/>}/>
        <Route path='/movies/:id' element={<Discription movies={movies}/>}/>
      </Routes>
    </div>
  );
}

export default App;