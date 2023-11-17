/* eslint-disable import/no-anonymous-default-export */
import "./Card.css";
import { Link } from "react-router-dom";

export default ({ imageSrc, followersCount, label, likes, slug }) => {
  return (
    <div className="card">
      {slug ? (
        <Link to={`/music/${slug}`}>
          <div className="card-img-content">
            <img src={imageSrc} alt="songName" />
            <div className="follow-text">
              {followersCount ? (
                <div>{followersCount} Follows</div>
              ) : (
                <div>{likes} Likes</div>
              )}
            </div>
          </div>
          <div className="card-tile-name">{label}</div>
        </Link>
      ) : (
        <div>
          <div className="card-img-content">
            <img src={imageSrc} alt="songName" />
            <div className="follow-text">
              {followersCount ? (
                <div>{followersCount} Follows</div>
              ) : (
                <div>{likes} Likes</div>
              )}
            </div>
          </div>
          <div className="card-tile-name">{label}</div>
        </div>
      )}
    </div>
  );
};
