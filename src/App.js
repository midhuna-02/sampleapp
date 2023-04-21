import React,{useState} from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
 import CardData from './components/CardData';

import './styles.css';
import cardData from "./components/CardData";

function App() {
  let [favImages,setFavImages]=useState([]);
  function getFavImg(imgSrc) {
  setFavImages([...favImages,imgSrc]);
    
  }
function removeFavImage(imgSrc)
{
  setFavImages([...favImages].filter((currentImage)=>{
    return !imgSrc.includes(currentImage);
  }))
}

  //let map favorite images
  let userFavImg=favImages.map((imgSrc)=>{
    return(
    <div className="favImage">
      <i className="fa-solid fa-circle-xmark" onClick={()=>{
        removeFavImage(imgSrc)
      }}>

      </i>
      <img src={imgSrc}  />
      </div>
    );
  })
 let card= cardData.map((cardItem)=>{
    return(
     <Card
     cardContent={{
      imgSrc:cardItem.imgSrc,
      name:cardItem.name,
      phone:cardItem.phone,
      email:cardItem.email,
     
    }}
    getFavImages={
      getFavImg
    }
     />
    )
  });
  

  return (
    <div className="App">
    <Header/>
    
    <Hero/>
    <div className="container-card">
      
    <h3 className="destination">Destinations</h3>
    <div className="container-flex">
  <div className="card-flex">{card}</div>
  
  <aside className="favorite">
    <h3>Favorite</h3>
    {userFavImg}
    {/* <img className="favimg" src={favImges} alt="" /> */}
    
  </aside>
  </div>
  </div>
  

    <Footer/>


      </div>
      
  );
}

export default App;
