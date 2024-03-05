import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Cards from './components/cards';
import Nav from './components/nav';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/about';
import Detail from './components/detail';
import Form from './components/login';
import Favorites from './components/favorites';
export const URL ='http://localhost:3001/rickandmorty/character/'
  // 'https://rickandmortyapi.com/api/character/'

    
function App() {

  const [characters, setCharacters] = useState([]);
  
     const [access, setAccess] = useState(false);

     const location = useLocation();
     const navigate = useNavigate();

     //DB FALSA
    //  const EMAIL = "jram828@yahoo.com";
    //  const PASSWORD = "Jram0828";
  
    useEffect(() => {
      !access && navigate("/");
    }, [access, navigate]);

        //CON WEB SERVER
    //  const login=(userData)=> {
    //    if (userData.password === PASSWORD && userData.email === EMAIL) {
    //      setAccess(true);
    //      navigate("/home");
    //    } else {
    //      window.alert("Usuario o contraseña incorrectos");
    //    }
  //  }
  async function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    try {
      const { data } = await axios(URL + `?email=${email}&password=${password}`);
      console.log('Login 2:',data)
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
      } catch (error) {
        window.alert("Usuario o contraseña incorrectos");
      };
  }
      const logout = () => {
        alert("Ha salido exitosamente");
        setAccess(false);
        navigate("/");
      };
  
  const onSearch = async (id) => {
    try {
        const {data }= await axios(`${URL}${id}`)
         setCharacters([...characters, data]);
      } catch (error) {
        window.alert('Character Not Found. There are 826 characters!');
      };
  };

  const onClose = (id) => {
    const charactersFilter = characters.filter((character) => character.id !== id);
    setCharacters(charactersFilter);
    }
  
  return (
    <div className="App">
      <h1
        style={{
          color: "aqua",
          WebkitTextStrokeWidth: "1px",
          WebkitTextStrokeColor: "black",
        }}
      >
        PROYECTO INTEGRADOR - SOY HENRY{" "}
      </h1>
      <h2
        style={{
          color: "aqua",
          WebkitTextStrokeWidth: "1px",
          WebkitTextStrokeColor: "black",
        }}
      >
        Personajes Rick and Morty{" "}
      </h2>
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
