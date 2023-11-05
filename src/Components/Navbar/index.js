import Button from '../Button'
import SearchBox from '../SearchBox'
import './navbar.css'

const Navbar = () => {
  return(
  <navbar className="nav-bar">
    <img src='logo.png'alt='qtify-logo' width ={67} height={34}></img>
    <SearchBox />
    <Button>Give Feedback</Button>
  </navbar>);
};

export default Navbar;
