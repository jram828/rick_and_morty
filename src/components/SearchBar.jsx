import { useState } from "react";

export default function SearchBar(props) {
   
   let [id, setId] = useState("");

   const handleChange = (event) => {
     setId(event.target.value);
   };

  return (
    <div>
      <input type="search" name="personaje" />
      <button onClick={props.onSearch()}>Agregar</button>
    </div>
  );
}
