/* eslint-disable import/no-anonymous-default-export */
import DropDownCard from "../DropDownCard";
import "./SearchDropDown.css";
export default ({ albumData }) => {
  return (
    <div className="search-drop-down">
      {albumData.length > 0 &&
        albumData.map((data, i) => <DropDownCard albumData={data} key={i} />)}
    </div>
  );
};
