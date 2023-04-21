import React,{useState} from 'react';
import heart from '../assets/heart-solid.svg';

function Card(pops) {
 
  let favorite=useState("Add to favorite");
  let activeClass=useState("");
 let [btnTextState,setBtnTextState]=favorite;
 let [classState,setClassState]=activeClass;
  function addToFavorite(imgSrc) 
  {
    
    setBtnTextState((preState)=>{
if(preState==="Add to favorite")
{
  pops.getFavImages(imgSrc);
  return "Added to favorite";
}
  else{
    return "Add to favorite";
  }
    });
 
setClassState((preClass)=>{
  if(preClass=="")
  {
    return "active";
  }
  else{
    return "";
  }
})
  }
  
  return (
    
    <div className={`card ${classState}`}>
    <img className='icons' src={heart} alt="1bvbn" />
      <img src={pops.cardContent.imgSrc} alt="" />
      
      <h3>{pops.cardContent.name}</h3>
      <p>{pops.cardContent.phone}</p>
      <p>{pops.cardContent.email}</p>
      <button onClick={()=>{addToFavorite(pops.cardContent.imgSrc)} }>{btnTextState}</button>
    </div>
  )
}

export default Card