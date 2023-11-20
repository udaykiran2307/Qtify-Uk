import React from "react";
import SongRow from "../../Components/SongRow";
import SongTable from "../../Components/SongTable";
import Pagination from "@mui/material/Pagination";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

const QTIFY_URL = "https://qtify-backend-labs.crio.do";
const CurrentAlbum = () => {
  const { albumId } = useParams();
  console.log(albumId);
  const [slugData, setSlugData] = useState([]);
  const[curPageData,setCurPageData] = useState([]);
  useEffect(() => {
    axios.get(`${QTIFY_URL}/album/${albumId}`).then(({ data }) => {
      setSlugData(data.songs);
      setCurPageData(data.songs.splice(0,10));
      console.log("slugdata", data.songs);
      console.log("img", data.image);
    });
  }, []);

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    setCurPageData(slugData.slice((value-1)*10,(value-1)*10+10));
    
  };
  
 

  return (
    <div>
      <SongTable />
      <Pagination
        count={Math.ceil(slugData.length/10)}
        page={page}
        onChange={handleChange}
        color="secondary"
        sx={{ color: "white" }}
        className="pagination"
        size='small'
      />
      <SongRow title={'Title'} artist={'Artist'} duration={'Duration'} />
      {curPageData.map((data) => (
        <SongRow
          key={data.id}
          title={data.title}
          image={data.image}
          artist={data.artists}
          duration={data.durationInMs}
        />
      ))}
    </div>
  );
};

export default CurrentAlbum;
