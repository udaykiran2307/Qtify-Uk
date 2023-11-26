// import logo from './Assets/logo.svg';

import "./styles/App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/home";
import CurrentAlbum from "./Pages/CurrentAlbum/currentAlbum";
import { useEffect, useState } from "react";
import axios from "axios";

const QTIFY_URL = "https://qtify-backend-labs.crio.do";

function App() {
  const [albumData, setAlbumData] = useState([]);
  useEffect(() => {
    axios.get(`${QTIFY_URL}/albums/top`).then(({ data }) => {
      console.log('fromApp',data);
      setAlbumData(data);
    });
  }, []);
  return (
    <div>
      <Navbar image={"logo.png"} albumData = {albumData} />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/music/:albumId" element={<CurrentAlbum />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
