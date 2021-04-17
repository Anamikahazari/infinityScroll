import React from 'react'
import { CoverageMap } from 'istanbul-lib-coverage';
// import styled from 'styled-components';
// const Img = styled.img`
//     width: 100%;
//     height:100%;
//     object-fit:cover;
// `;

const UnsplashImage = ({url,key}) => {
    return (
         <img src={url} key={key} alt = " " />
           
    )
}

export default UnsplashImage;