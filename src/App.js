import './App.css';
// import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters from './data.js';

function App() {
   return (
     <div className="App">
       <h1>Rick and Morty Characters</h1>
       <br />
       <SearchBar onSearch={(characterID) => window.alert(characterID)} />
       <br />
       <Cards characters={characters} />
     </div>
   );
}
export default App;
