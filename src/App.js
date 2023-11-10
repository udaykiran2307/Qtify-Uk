// import logo from './Assets/logo.svg';
import "./styles/App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroCard";
import CardSection from "./Components/Card-Section";
import { useState, useEffect } from "react";
import axios from "axios";

const QTIFY_URL = "https://qtify-backend-labs.crio.do";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

 

  useEffect(() => {
     axios.get(`${QTIFY_URL}/albums/top`).then(({data})=>{
      console.log(data);
      setTopAlbums(data);
    });
     axios.get(`${QTIFY_URL}/albums/new`).then(({data})=>{
      setNewAlbums(data);
    }); 
  },[]);

  

  return (
    <div>
      <Navbar />
      <HeroSection />
      <CardSection cardData={topAlbums} album={"Top Albums"} />
      <CardSection cardData={newAlbums} album={"New Albums"} />
    </div>
  );
}

export default App;
