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
export default () => {
  return (
    <form>
      <Card sx={{ width: "526px", height: "524px", margin: "auto" , marginBottom:"10px"}}>
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
            <IconButton aria-label="close" className="black-icon">
              <CloseIcon />
            </IconButton>
          </div>

          <div className="input-section">
            <TextField
              id="outlined-basic"
              label="Fullname"
              variant="outlined"
              sx={{ width: "362px", height: "70px" }}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              sx={{ width: "362px", height: "70px" }}
            />
            <TextField
              id="outlined-basic"
              label="Subject"
              variant="outlined"
              sx={{ width: "362px", height: "70px" }}
            />
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              defaultValue=""
              sx={{ width: "362px", height: "70px" }}
            />
          </div>
        </CardContent>

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop:"4rem"
          }}
        >
          <Button size="small" variant="contained" className="btn-submit" sx={{textTransform: "none",}}>
            Submit Feedback
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};