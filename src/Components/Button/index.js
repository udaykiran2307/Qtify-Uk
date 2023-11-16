/* eslint-disable import/no-anonymous-default-export */
import "./button.css";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FeedBack from "../FeedBack/index"


// export default ({ children,handleClickOpen }) => {
  
//   return ;
// };


export default ({children}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
     <button className="button" onClick = {handleClickOpen}>{children}</button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <FeedBack handleClose = {handleClose}/>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
