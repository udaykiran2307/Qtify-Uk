import React from 'react'
import SongRow from "../../Components/SongRow";
import SongTable from "../../Components/SongTable";
import Pagination from "@mui/material/Pagination";
import {useParams} from "react-router-dom";
const CurrentAlbum = () => {
    const {albumId} = useParams();
  return (
    <div>
      <h1>Uday</h1>
    </div>
  )
}

export default CurrentAlbum
