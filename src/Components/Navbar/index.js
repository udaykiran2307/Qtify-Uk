import Button from "../Button";
import SearchBox from "../SearchBox";
import "./navbar.css";

const Navbar = ({image,albumData}) => {
  return (
    <div className="nav-bar">
      <img src= {image} alt="qtify-logo" width={67} height={34}></img>
      <SearchBox allData={albumData} />
      <Button>Give Feedback</Button>
    </div>
  );
};

export default Navbar;
