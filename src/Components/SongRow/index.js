/* eslint-disable import/no-anonymous-default-export */
import Grid from "@mui/material/Grid";
import "./songRow.css";
export default ({ title, artist, duration }) => {
  if (title === "Title") {
    console.log(title);
    return (
      <div className="grid-cont">
        <Grid container spacing={2} className="grid">
          <Grid item xs={4} lg={4}>
            <div className="albumPhoto">
              <div>{title}</div>
            </div>
          </Grid>
          <Grid item xs={4} lg={4} className="item-2">
            <div>{artist}</div>
          </Grid>
          <Grid item xs={4} lg={4} className="item-3">
            <div>{duration}</div>
          </Grid>
        </Grid>
        <hr />
      </div>
    );
  }
  return (
    <div className="grid-cont">
      <Grid container spacing={2} className="grid">
        <Grid item xs={4} lg={4}>
          <div className="albumPhoto item">
            <img
              src="https://images.unsplash.com/photo-1698756320519-6aad25c9b2e7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="no-img"
              className="album-img"
            ></img>
            <div>Song name</div>
          </div>
        </Grid>
        <Grid item xs={4} lg={4} className="item-2">
          <div>Hello</div>
        </Grid>
        <Grid item xs={4} lg={4} className="item-3">
          <div>1:59</div>
        </Grid>
      </Grid>
      <hr />
    </div>
  );
};
