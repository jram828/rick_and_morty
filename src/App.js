import { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Nav from './components/Nav';

const URL='https://rickandmortyapi.com/api/character/'
    
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
       <h1 style={{color: "aqua",}}> Rick and Morty Characters </h1>
       <Nav onSearch={onSearch}/>
       <Cards characters={characters} onClose={ onClose} />
     </div>
   );
}

export default App;
