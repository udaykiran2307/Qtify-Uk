/* eslint-disable import/no-anonymous-default-export */
import './Card.css'


export default ({imageSrc,followersCount,label})=>{
     return(
        <div className='card'>
         <div className='card-img-content'>
         <img src={imageSrc}alt='songName'></img>
         <div className='follow-text'>
            <div>{followersCount} Follows</div>
         </div>
         </div>
         <div className='card-tile-name'>{label}</div>
        </div>
     )
}