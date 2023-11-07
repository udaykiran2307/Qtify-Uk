import logo from './Assets/logo.svg';
import './styles/App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroCard'
import CardSection from './Components/Card'
function App() {
  return (
    <div>
    <Navbar/>
    <HeroSection/>
    <CardSection/>
    </div>
  );
}

export default App;
