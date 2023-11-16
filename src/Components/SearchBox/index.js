/* eslint-disable import/no-anonymous-default-export */
import { GrSearch} from 'react-icons/gr';


export default  () => {
    return(
        <form style={{
            display:'flex',
            minWidth:'568px'
        }}>
            <input
            placeholder='Search a album of your choice'
            style={{
                flex:1,
                borderRadius: '8px 0px 0px 8px',
                padding:'8px',
                backgroundColor: 'white'
            }}
            ></input>
            <button
             style={{
                width:'66px',
                height:'48px',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                borderRadius: '0px 8px 8px 0px',
                backgroundColor: 'white'
             }}
            ><GrSearch/>
            </button>
        </form>
    );
  };