import React, {useState,useEffect} from 'react';
import './App.css';
import Heading from './components/Heading';
import Loader from './components/Loader';
import UnsplashImage from './components/UnsplashImage';
import axios from 'axios';
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
// style
const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
body{
  font-family: san-serif;
}
`;

const WrapperImage = styled.section`
max-width:80rem;
margin : 4rem auto;
display:grid;
grid-gap:1em;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gird-auto-rows:300px;
`;


function App() {
   const [images, setImages] = useState([]);

    useEffect(()=>{
        // const apiRoot = "https://api.unsplash.com";
          fetchImages();
            },[])
          // fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=10`
          // ).then((response)=>{response.json()}).then(
          //   (data)=>{console.log("this is",data)}
          // ).catch((error)=>{console.log("error is" ,error)})
        //  });
    const fetchImages = () =>{

      const accessKey = "UubuOCBEhGKOmjLSA3rAmi99B4EDk-yKKRUTArhZeDU";
      axios
      .get(`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=12`)
      .then((res)=>{setImages([...images,...res.data])})
    }


  return (
    <div className="App">
      <Heading/>
      <GlobalStyle/>
      <InfiniteScroll
       dataLength ={images.length}
       next = {fetchImages}
       hasMore ={true}
           >
          <WrapperImage>
          {images.map((image)=>(
            <UnsplashImage url={image.urls.thumb} key={image.id}/>
          ))}
          </WrapperImage>
          <Loader/>
      </InfiniteScroll>
    
     
      
    </div>
  );
}
export default App;
