/* eslint-disable import/no-anonymous-default-export */

import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import "./FeedBack.css";
export default ({handleClose}) => {
  return (
    <form>
      <Card sx={{ width: "36.5vw", height: "500px", margin: "auto" , marginBottom:"10px"}}>
        <CardContent>
          <div className="feedback-head">
            <Typography
              sx={{ textAlign: "center" ,marginLeft:'130px', }}
              variant="h4"
              color="text.primary"
              gutterBottom
            >
              Feedback
            </Typography>
            <IconButton aria-label="close"  onClick={handleClose}>
              <CloseIcon sx={{color:'black'}} />
            </IconButton>
          </div>

          <div className="input-section">
            <TextField
              id="outlined-basic"
              label="Fullname"
              variant="outlined"
              sx={{ width: "25vw", height: "70px" }}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              sx={{ width: "25vw", height: "70px" }}
            />
            <TextField
              id="outlined-basic"
              label="Subject"
              variant="outlined"
              sx={{ width: "25vw", height: "70px" }}
            />
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              defaultValue=""
              sx={{ width: "25vw", height: "70px" }}
            />
          </div>
        </CardContent>

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop:"1rem",
          }}
        >
          <Button size="large" variant="contained" className="btn-submit" sx={{textTransform: "none",padding:'30px',width:'2rem'}}>
            Submit Feedback
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};
