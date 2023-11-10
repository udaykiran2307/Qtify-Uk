/* eslint-disable import/no-anonymous-default-export */
import Card from "../Card";
import "./CardSection.css";
import Button from "@mui/material/Button";

export default ({ cardData, album }) => {
  return (
    <div className="section">
      <div className="section-top">
        <h2 className="section-head">{album}</h2>
        <Button
          variant="text"
          style={{textTransform:'none'}}
          sx={{ color: "#34C94B", fontFamily: "Poppins", fontSize: "1rem" }}
        >
          Show All
        </Button>
      </div>
      <div className="card-section">
        {cardData.map((data) => (
          <Card
            key={data.id}
            imageSrc={data.image}
            followersCount={data.follows}
            label={data.title}
          />
        ))}
      </div>
    </div>
  );
};
