import Card from '../card';

export const Cards=({ characters, onClose }) =>{
  console.log('cards:',characters);
  return (
    <div className="cards">
      {characters.map((character) => (
        <Card key={character.id} character={character} onClose={onClose} />
      ))}
    </div>
  );
}

export default Cards;
