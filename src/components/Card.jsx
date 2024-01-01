import "../App.css";
export default function Card(props) {
  return (
    <div>
      <div class="card" key={props.id}>
        <button onClick={() => window.alert("Emulamos que se cierra la card")}>
          X
        </button>
        <h2>Name:{props.character.name}</h2>
        <h2>Status:{props.character.status}</h2>
        <h2>Species:{props.character.especies}</h2>
        <h2>Gender:{props.character.gender}</h2>
        <h2>Origin:{props.character.origin.name}</h2>
        <img
          class="photo"
          src={props.character.image}
          alt="Imagen del personaje"
        />
      </div>
    </div>
  );
}
