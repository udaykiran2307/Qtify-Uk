/* eslint-disable import/no-anonymous-default-export */
import Card from "../Card";
import "./CardSection.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import Carousel from "../Carousels";
export default ({ cardData, album }) => {
  const [buttonStatus, setButtonStatus] = useState(0);
  const buttonArray = ["Show All", "Collapse"];
  const handleButtonClick = () => {
    setButtonStatus(1 - buttonStatus);
  };

  return (
    <div className="section">
      <div className="section-top">
        <h2 className="section-head">{album}</h2>
        <Button
          variant="text"
          style={{ textTransform: "none" }}
          sx={{ color: "#34C94B", fontFamily: "Poppins", fontSize: "1rem" }}
          onClick={handleButtonClick}
        >
          {buttonArray[buttonStatus]}
        </Button>
      </div>
      <div className="card-section">
        {buttonStatus ? (
          cardData.map((data) => (
            <Card
              key={data.id}
              imageSrc={data.image}
              followersCount={data.follows}
              label={data.title}
            />
          ))
        ) : (
          <Carousel data={cardData} />
        )}
      </div>
    </div>
  );
};
