import { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';


export const URL='https://rickandmortyapi.com/api/character/'
    
function App() {

  const [characters, setCharacters] = useState([]);
  
  const onSearch = (id) => {
    fetch(`${URL}${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters([...characters, data]);
      });
  };

  const onClose = (id) => {
    const charactersFilter = characters.filter((character) => character.id !== id);
    setCharacters(charactersFilter);
  }
  
  // console.log(characters);
   return (
     <div className="App">
       <h1 style={{ color: "aqua" }}> Rick and Morty Characters </h1>
       <Nav onSearch={onSearch} />
       <Routes>
         <Route path='/' element='Hola'/>
         <Route path="/Home" element={<Cards characters={characters} onClose={onClose} />} />
         <Route path="/About" element={<About/>} />
         <Route path="/Detail/:id" element={<Detail />} />
       </Routes>

       
     </div>
   );
}

export default App;
