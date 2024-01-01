import Card from './Card';

export default function Cards( props) {
   console.log(props)
   return (
     <div class="cards">
       {props.characters.map((character) => (
         <Card key={character.id} character={character} />
       ))}
     </div>
   );
}

// {props.charteller.map((ítem)=>