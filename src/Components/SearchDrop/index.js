/* eslint-disable import/no-anonymous-default-export */
import DropDownCard from "../DropDownCard";
import './SearchDropDown.css'
export default ({ albumData }) => {
  console.log("dripp",albumData);
  console.log(albumData.length);
  return (
    <div className="search-drop-down">
      {albumData.length > 0 && albumData.map((data) => (
        <DropDownCard  albumData = {data} />
      ))}
    </div>
  );
};
