// import logo from './Assets/logo.svg';

import "./styles/App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home/home";
import CurrentAlbum from "./Pages/CurrentAlbum/currentAlbum";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/music/:albumId" element={<CurrentAlbum />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
