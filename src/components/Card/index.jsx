import "../../App.css";
// import onClose from "../../App";
export default function Card(props) {
  console.log(props)
  const { name, status, gender, species, origin, image, id } = props.character;
  
  // const  onClose  = props;
  // console.log(onClose);
  return (
    
    <div className="container">
      <div className="card" key={id}>
        <button className="boton" onClick={() => { props.onClose(id) }}>
          X
        </button>
        <img
          className="photo"
          src={image}
          alt="Imagen del personaje"
        />
        <h1
          style={{
            backgroundColor: "yellowgreen",
            fontSize: 16,
          }}
        >
          Name:{name}
        </h1>
        <h2>Status:{status}</h2>
        <h2>Species:{species}</h2>
        <h2>Gender:{gender}</h2>
        <h2>Origin:{origin.name}</h2>
      </div>
    </div>
  );
}
