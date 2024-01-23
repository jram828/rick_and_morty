import SearchBar from "../searchbar";
import { Link, Button } from "react-router-dom";

const Nav = ({ onSearch,logout }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        gap: 10,
        justifyContent: "center",
      }}
    >
      <SearchBar onSearch={onSearch} />
      <Link to="about/">About</Link>
      <Link to="home/">Home</Link>
      <Link to="favorites/">Favorites</Link>
      <Link to={"/home"} onClick={logout}>Logout
      </Link>
    </div>
  );
};

export default Nav;

