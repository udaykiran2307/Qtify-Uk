/* eslint-disable import/no-anonymous-default-export */

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Slider from "@mui/material/Slider";

import "./musicPlayer.css";

export default function MediaControlCard() {

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "250px",
        width: "98.5vw",
        alignItems: "start",
        margin:"1rem"
      }}
      className="musicplayer"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginTop: "1rem",
          marginLeft: "3rem",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: "150px",
            height: "150px",
            padding: "4px",
            borderRadius: "8px",
            margin: "2px",
          }}
          image="data:image/jpeg;base64,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"
          alt="Live from space album cover"
        />
        <div>
          <Typography sx={{ marginTop: "10px" }}>The Nights</Typography>
          <Typography>-Avicii</Typography>
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "auto",
          marginBottom: "2rem",
        }}
      >
        <IconButton
          aria-label="play/pause"
          sx={{
            borderRadius: "50%",
            backgroundColor: "white",
            color: "black",
            margin: "auto",
          }}
        >
          <PlayArrowIcon
            sx={{ height: "20px", width: "20px", margin: "auto" }}
          />
        </IconButton>
        <Box sx={{display:'flex', gap:'10px', alignItems:'end'}}>
        <Typography sx={{fontSize:'1rem',marginRight:'5px'}}>0:00</Typography>
        <Slider
          aria-label="Volume"
          sx={{ height: "5px", width: "85vw", marginTop: "5px" }}
          className="slider"
        /><Typography>3:00</Typography>
        </Box>
      </Box>
    </Card>
  );
}
//value={value} onChange={handleChange}
