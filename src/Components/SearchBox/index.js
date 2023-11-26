/* eslint-disable import/no-anonymous-default-export */
import { GrSearch} from 'react-icons/gr';
import './searchBox.css'
import { useState,useEffect } from 'react';
import SearchDrop from '../SearchDrop';
export default  ({allData}) => {
    const [searchValue,setSearchValue]  = useState("");
    const [filteredData , setFilteredData] = useState("");
    const updateSearchValue = (event) => {
        setSearchValue(event.target.value);
        const newData = allData.filter((data)=>data.title.toLowerCase().includes(searchValue));
        setFilteredData(newData);
    }
    return(
        <div className='searchbox-section'>
        <form style={{
            display:'flex',
            minWidth:'40vw'
        }}>
            <input
            placeholder='Search a album of your choice'
            className='searchbox'
            style={{
                width:'32rem',
                borderRadius: '8px 0px 0px 8px',
                padding:'0.5rem',
                backgroundColor: 'white'
            }}
            value={searchValue}
            onChange={updateSearchValue}
            ></input>
            <button
             style={{
                width:'4.1rem',
                height:'3rem',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                borderRadius: '0px 8px 8px 0px',
                backgroundColor: 'white'
             }}
             className='icon-btn'
            ><GrSearch/>
            </button>
        </form>
       { filteredData  && searchValue && <SearchDrop albumData={filteredData}/>}
        </div>
    );
  };