import React, {useState,useEffect} from 'react';
import './App.css';
import Heading from './components/Heading';
import Loader from './components/Loader';
import UnsplashImage from './components/UnsplashImage';
import axios from 'axios';
// import styled from 'styled-components';
// import {createGlobalStyle}
function App() {
   const [images, setImages] = useState([]);

    useEffect(()=>{
        // const apiRoot = "https://api.unsplash.com";
        const accessKey = "UubuOCBEhGKOmjLSA3rAmi99B4EDk-yKKRUTArhZeDU";
           axios
           .get(`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=10`)
           .then((res)=>{setImages([...images,...res.data])
            },[])
          // fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=10`
          // ).then((response)=>{response.json()}).then(
          //   (data)=>{console.log("this is",data)}
          // ).catch((error)=>{console.log("error is" ,error)})
         });
    
  return (
    <div className="App">
      <Heading/>
      <Loader/>
      {images.map((image)=>(
        <UnsplashImage url={image.urls.thumb} key={image.id}/>
      ))}
    </div>
  );
}
export default App;
