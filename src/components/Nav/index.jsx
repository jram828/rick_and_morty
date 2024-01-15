import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row-reverse',
      gap: 10,
    justifyContent:'center'}}>
      <SearchBar onSearch={onSearch} />
      <Link to="About/">About</Link>
      <Link to="Home/">Home</Link>
    </div>
  );
};

export default Nav;

