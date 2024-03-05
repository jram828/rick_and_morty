import SearchBar from "../searchbar";
import { Link} from "react-router-dom";
import { Button } from "../Mystyles";

const Nav = ({ onSearch,logout }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-around",
        width: "80%",
      }}
    >
      <SearchBar onSearch={onSearch} />
      <Link to="about/">
        <Button>About</Button>
      </Link>
      <Link to="home/">
        <Button>Home</Button>
      </Link>
      <Link to="favorites/">
        <Button>Favorites</Button>
      </Link>
      <Link to={"/home"} onClick={logout}>
        <Button>Logout</Button>
      </Link>
    </div>
  );
};

export default Nav;

