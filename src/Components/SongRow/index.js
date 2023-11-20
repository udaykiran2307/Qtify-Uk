/* eslint-disable import/no-anonymous-default-export */
import Grid from "@mui/material/Grid";
import "./songRow.css";
import { useEffect, useState } from "react";
export default ({ title, artist, duration, image }) => {
  const [timeInSec, setTimeInSec] = useState(0);
  useEffect(() => {
    const factor = Math.pow(10, 1);
    const res = Math.round((duration / 1000) * factor) / factor;
    setTimeInSec(res);
  }, []);

  if (title === "Title") {
    console.log(title);
    return (
      <div className="grid-cont">
        <Grid container spacing={2} className="grid">
          <Grid item xs={4}>
            <div className="albumPhoto">
              <div>{title}</div>
            </div>
          </Grid>
          <Grid item xs={4} className="item-2">
            <div>{artist}</div>
          </Grid>
          <Grid item xs={4} className="item-3">
            <div>{duration}</div>
          </Grid>
        </Grid>
        
      </div>
    );
  }
  return (
    <div className="grid-cont">
      <Grid container spacing={2} className="grid">
        <Grid item xs={4} lg={4}>
          <div className="albumPhoto item">
            <img src={image} alt="no-img" className="album-img"></img>
            <div className="album-txt">{title}</div>
          </div>
        </Grid>
        <Grid item xs={4} lg={4} className="item-2">
          <div>{artist}</div>
        </Grid>
        <Grid item xs={4} lg={4} className="item-3">
          <div>{timeInSec}sec</div>
        </Grid>
      </Grid>
      <hr />
    </div>
  );
};
