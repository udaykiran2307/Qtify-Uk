import Button from "../Button";
import SearchBox from "../SearchBox";
import "./navbar.css";

const Navbar = ({image}) => {
  return (
    <div className="nav-bar">
      <img src= {image} alt="qtify-logo" width={67} height={34}></img>
      <SearchBox />
      <Button>Give Feedback</Button>
    </div>
  );
};

export default Navbar;
