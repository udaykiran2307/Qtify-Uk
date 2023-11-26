/* eslint-disable import/no-anonymous-default-export */
import "./DropDown.css";
export default ({ albumData }) => {
  return (
    <div className="drop-down-section">
      <div className="img-container">
        <img
          src={albumData.image}
          alt="Album Img"
          className="img-class"
        ></img>
        <div className="head-container">
          <div>{albumData.title}</div>
          <div>{albumData.songs[0].artists}</div>
        </div>
      </div>
      <div>{albumData.follows} Follows</div>
    </div>
  );
};
