import { useState } from 'react';
import './App.css';
import Addmovie from './Components/AddMovie';
import Movieslist from './Components/Movieslist';
import { Data } from './Data';
import Search from './Components/Search';

function App() {
const addmovie=(newM)=>setMovies([...movies,newM])
const [movies, setMovies] = useState(Data)
const [search,setSearch]=useState ("")
const [rate, setRate] = useState(0)


  return (
    <div className="App">
      <Search search={search} setSearch={setSearch} setRate={setRate}/> 
      <Addmovie addmovie={addmovie}/>
      <Movieslist movies={movies} search={search} rating={rate} />
    </div>
  );
}

export default App;