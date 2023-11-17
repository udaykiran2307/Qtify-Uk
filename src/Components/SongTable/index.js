/* eslint-disable import/no-anonymous-default-export */
import NavBar from "../Navbar";
import { FaBlackTie, FaCircleArrowLeft } from "react-icons/fa6";
import "./SongTable.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IoShuffleOutline } from "react-icons/io5";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

const ImgMediaCard = () => {
  return (
    <Card
      sx={{
        width: "1009px",
        height: "329px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#121212",
        margin: "auto",
      }}
    >

     
      <CardMedia
        component="img"
        alt="green iguana"
        sx={{ height: "300px", width: "288px", borderRadius: "10px" }}
        image="https://images.unsplash.com/photo-1700021654526-4d6c6ebdc5c3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <CardContent sx={{ color: "white" }}>
        <Typography gutterBottom variant="h4" component="div" maxWidth="661px">
          Best of Punjabi Bae in 2022
        </Typography>
        <Typography
          variant="body"
          color="white"
          maxWidth="600px"
          sx={{ marginBottom: "1rem",marginY:"10px" }}
        >
          Catch the most romantic punjabi tracks of 2022
        </Typography>
        <Typography variant="body" color="white" maxWidth="661px" sx={{textTransform:'none', marginY:'10px' }}>
          #SpotifyWrapped 2022
        </Typography>

        <Typography
          variant="body"
          color="white"
          maxWidth="300px"
          sx={{ display: "flex", justifyContent: "space-between",marginY:'10px' }}
        >
          75 songs <li>3 hr 45 min </li> <li>100 Follows</li>
        </Typography>

        <Button variant="contained"  sx={{textTransform:'none', marginY:'10px', backgroundColor:'#34C94B' }}> <IoShuffleOutline />  Shuffle</Button> 
        <Button variant="contained" sx={{textTransform:'none', marginX:'10px', backgroundColor:'#34C94B' }}> <LibraryAddIcon sx={{height:'15px',width:'15px'}}/>Add to library</Button>
      </CardContent>
    </Card>
  );
};

export default () => {
  return (
    <div>
      <NavBar />
      <ImgMediaCard />
    </div>
  );
};
