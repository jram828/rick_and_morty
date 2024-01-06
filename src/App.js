import './App.css';
// import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters from './data.js';

function App() {
   return (
     <div className="App">
       <h1 style={{
         color:'aqua'
}}>Rick and Morty Characters</h1>
       <SearchBar onSearch={(characterID) => window.alert(characterID)} />
       <Cards characters={characters} />
     </div>
   );
}
export default App;
