import { Button, ContainerNav, Input } from "./Mystyles";
export default function SearchBar(props) {
  const handleClick = () => {
    props.onSearch();
  };

  return (
    <ContainerNav>
      <Input type="search" name="personaje" placeholder="ID.."/>
      <Button onClick={handleClick}>Agregar</Button>
    </ContainerNav>
  );
}
