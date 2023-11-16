// import logo from './Assets/logo.svg';
import { useState, useEffect } from "react";
import axios from "axios";
import "./styles/App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroCard";
import CardSection from "./Components/Card-Section";
import SongSection from "./Components/SongSection";
import FaqSection from "./Components/FAQ"
import FeedBack from "./Components/FeedBack"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SongRow from './Components/SongRow'
import SongTable from "./Components/SongTable"
import Pagination from '@mui/material/Pagination';





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

  // <Navbar />
  // <HeroSection />
  // <CardSection cardData={topAlbums} album={"Top Albums"} />
  // <CardSection cardData={newAlbums} album={"New Albums"} />
  // <SongSection/>
  // <FaqSection/>
  // <FeedBack/>

  return (
    <div>
     <SongTable />
     <Pagination count={10} className='page'/>
     <SongRow title='Title' artist='Artist' duration='Duration'/>
     <SongRow/>
     <SongRow/>
     <SongRow/>
     <SongRow/>
     <SongRow/>
     <SongRow/>
     <SongRow/>
     <SongRow/>
     <SongRow/>

     
    </div>
  );
}

export default App;
