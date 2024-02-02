import Card from '../card';

export const Cards=({ characters, onClose }) =>{
  // console.log('cards:',characters);
  return (
    <div className="cards">
      {characters.map((character) => {
        return (
          <div key={character.name}>
            <Card character={character} onClose={onClose} />
          </div>
        );
      }
      )}
    </div>
  );
}

export default Cards;
