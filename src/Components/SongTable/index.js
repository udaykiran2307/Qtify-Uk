/* eslint-disable import/no-anonymous-default-export */

import {  FaCircleArrowLeft } from "react-icons/fa6";
import "./SongTable.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IoShuffleOutline } from "react-icons/io5";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from 'react-router-dom';
export default ({albumData}) => {
  const navigate = useNavigate();
  const goNext = () => {
    navigate("/");
  };
  return (
    <div>
      <IconButton aria-label="delete" size="small" onClick={goNext}>
        <FaCircleArrowLeft className="icon" />
      </IconButton>
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
          image={albumData.image}
        />
        <CardContent sx={{ color: "white" }}>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            maxWidth="661px"
          >
            {albumData.title}
          </Typography>
          <Typography
            variant="body"
            color="white"
            maxWidth="600px"
            sx={{ marginBottom: "1rem", marginY: "10px" }}
          >
            {albumData.description}
          </Typography>
          <Typography
            variant="body"
            color="white"
            maxWidth="661px"
            sx={{ textTransform: "none", marginY: "10px" }}
          >
            #SpotifyWrapped 2022
          </Typography>

          <Typography
            variant="body"
            color="white"
            maxWidth="600px"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginY: "10px",
            }}
          >
          {100} songs | 3 hr 45 min | {albumData.follows} Follows | 
          </Typography>

          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              marginY: "10px",
              backgroundColor: "#34C94B",
            }}
          >
            {" "}
            <IoShuffleOutline /> Shuffle
          </Button>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              marginX: "10px",
              backgroundColor: "#34C94B",
            }}
          >
            {" "}
            <LibraryAddIcon sx={{ height: "15px", width: "15px" }} />
            Add to library
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};


