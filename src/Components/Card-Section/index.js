/* eslint-disable import/no-anonymous-default-export */
import Card from '../Card'
import './CardSection.css'


export default ({cardData,album})=>{
    return (
        <div className='section'>
         <h2 className='section-head'>{album}</h2>
        <div className="card-section">
          {cardData.map((data)=>
               <Card
                key={data.id}
                imageSrc={data.image}
                followersCount={data.follows}
                label={data.title}
               />
          )}
   
       </div> 
       </div>
    )
}