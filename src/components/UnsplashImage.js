import React from 'react'
import { CoverageMap } from 'istanbul-lib-coverage';
import styled from 'styled-components';
 
const Img = styled.img`
height:300px;
width:300px; 
`;
const UnsplashImage = ({url,key}) => {
    return (
         <Img src={url} key={key} onClick={} alt = " " />
           
    )
}

export default UnsplashImage;