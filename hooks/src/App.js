import { useState } from 'react';
import '.app.css';
import Addmovie from './Components/AddMovie';
import MoviesList from './Components/Movieslist';
import { Data } from './Data';
import Search from './Components/Search';

function App() {
const addmovie=(newM)=>setMovies([...movies,newM])
const [movies, setMovies] = useState(Data)
const [search,setSearch]=useState ("")


  return (
    <div className="App">
    <Search search={search} setSearch={setSearch}/> 
      <Addmovie addmovie={addmovie}/>
<Movieslist movies={movies} search={search}/>
    </div>
  );
}

export default App;