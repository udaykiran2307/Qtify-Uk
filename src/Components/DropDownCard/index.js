/* eslint-disable import/no-anonymous-default-export */
import "./DropDown.css";
export default ({ albumData }) => {
  return (
    <div className="drop-down-section">
      <div className="img-container">
        <img
          src="https://img.freepik.com/free-vector/realistic-music-record-label-disk-mockup_1017-33906.jpg?w=826&t=st=1700638188~exp=1700638788~hmac=fc1f75e710b3101f373a8bb2f0f918723e95548161abc356bfacbd3c9feeedf1"
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
