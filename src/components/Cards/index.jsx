import Card from '../Card';

export const Cards=({ characters, onClose }) =>{
  // console.log(props);
  return (
    <div className="cards">
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
}

export default Cards;
// {props.charteller.map((ítem)=>