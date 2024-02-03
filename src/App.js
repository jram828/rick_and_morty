import { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/cards';
import Nav from './components/nav';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/about';
import Detail from './components/detail';
import Form from './components/login';
import Favorites from './components/favorites';
export const URL='https://rickandmortyapi.com/api/character/'
    
function App() {

  const [characters, setCharacters] = useState([]);
  
     const [access, setAccess] = useState(false);

     const location = useLocation();
     const navigate = useNavigate();

     //DB FALSA
     const EMAIL = "jram828@yahoo.com";
  const PASSWORD = "Jram0828";
  
    useEffect(() => {
      !access && navigate("/");
    }, [access, navigate]);

     const login=(userData)=> {
       if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate("/home");
       } else {
         window.alert("Usuario o contraseña incorrectos");
       }
     }
      const logout = () => {
        alert("Ha salido exitosamente");
        setAccess(false);
        navigate("/");
      };
  
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
  
  return (
    <div className="App">
      <h1 style={{ color: "aqua" }}> Rick and Morty Characters </h1>
      {location.pathname !== "/" ? (
        <Nav onSearch={onSearch} logout={logout} />
      ) : undefined}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
      </Routes>
    </div>
  );
}

export default App;
