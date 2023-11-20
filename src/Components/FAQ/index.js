/* eslint-disable import/no-anonymous-default-export */
import "./faq.css";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function BasicAccordion() {
  return (
    <div className="faq-container">
      <Accordion
        sx={{
          border: "2px ",
          borderColor: "#34C94B",
          padding: "2px",
          marginBottom: "1rem",
          borderRadius: "8px",
          width: "1113px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "#121212",
            color: "#FFFFFF",
            fontFamily: "Poppins",
            borderRadius: "8px",
          }}
        >
          <Typography>Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Yes! It is 100% free, and has 0% ads!</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          border: "2px ",
          borderColor: "#34C94B",
          padding: "2px",
          marginBottom: "1rem",
          borderRadius: "8px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{
            backgroundColor: "#121212",
            color: "#FFFFFF",
            fontFamily: "Poppins",
            borderRadius: "8px",
          }}
        >
          <Typography>Can I download and listen to songs offline?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sorry, unfortunately we don't provide the service to download any
            songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default () => {
  return (
    <div className="faq-section">
      <h1>FAQs</h1>
      <BasicAccordion />
    </div>
  );
};
