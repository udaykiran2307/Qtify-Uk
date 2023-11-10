/* eslint-disable import/no-anonymous-default-export */
import "./Song-section.css";
import Navigation from "./navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card";
const FilteredSong = ({ curSongsData }) => {
  return (
    <div className="filtered-song-section">
      {curSongsData.map((data) => (
        <Card
          key={data.id}
          imageSrc={data.image}
          followersCount={data.follows}
          label={data.title}
        />
      ))}
    </div>
  );
};

const QTIFY_URL = "https://qtify-backend-labs.crio.do";
export default () => {
  const [value, setValue] = useState(0);
  const [curSongsData, setCurSongsData] = useState([]);
  const [allSongsData, setAllSongsData] = useState([]);
  const songSelectionArray = ["All", "Rock", "Pop", "Jazz", "Blues"];

  const FilteredData = () => {
    if (value === 0) {
      setCurSongsData(allSongsData);
      return;
    }
    const genre = songSelectionArray[value];
    const filteredData = allSongsData.filter((e) => {
      return e.genre.label === genre;
    });
    setCurSongsData(filteredData);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    FilteredData();
    console.log(curSongsData);
  }, [value]);

  useEffect(() => {
    axios.get(`${QTIFY_URL}/songs`).then(({ data }) => {
      setAllSongsData(data);
      setCurSongsData(data);
    });
  }, []);

  return (
    <div className="song-section">
      <hr className="line"></hr>
      <h2>Songs</h2>
      <Navigation setCurValue={handleChange} curValue={value} />
      <FilteredSong curSongsData={curSongsData} />
    </div>
  );
};
