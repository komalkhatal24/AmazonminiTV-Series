import React from 'react';
import Card from './Cards';
import Sdata from './Sdata';
// function acard(val){
//   return(
//     <Card 
//     imgsrc ={val.imgsrc}
//     title={val.title}
//     sname={val.sname}
//     link={val.link}
//    />
// ) 
// }
const App=()=>(                                                                                                  
  <>
  <h1 className="heading_style">List of Top Series of <span className='span'>Amazon miniTV</span></h1>
  {Sdata.map((val)=>{
    return(
    <Card                                                                    
    imgsrc ={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}
   />
    );
   })}
  </>);
  export default App;
  
