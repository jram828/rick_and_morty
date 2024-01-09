import "../../App.css";
export default function Card(props) {

  const { onClose } = props;
  return (
    <div className="container">
      <div className="card" key={props.id}>
        <button className="boton" onClick={() => onClose(props.character.id)}>
          X
        </button>
        <img
          className="photo"
          src={props.character.image}
          alt="Imagen del personaje"
        />
        <h1
          style={{
            backgroundColor: "yellowgreen",
            fontSize: 16,
          }}
        >
          Name:{props.character.name}
        </h1>
        <h2>Status:{props.character.status}</h2>
        <h2>Species:{props.character.especies}</h2>
        <h2>Gender:{props.character.gender}</h2>
        <h2>Origin:{props.character.origin.name}</h2>
      </div>
    </div>
  );
}
