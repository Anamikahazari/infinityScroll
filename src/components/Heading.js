import React from 'react'
import styled from 'styled-components';

const HeadingStyle = styled.header`
//   max-width:100%;
//   text-align:center;
  margin:2rem;
display:flex;
justify-content:center;
`;
const H1 = styled.h1`
    font-family: 'Oswald',sans-serif;
    margin-bottom:1em
`;

const Heading = () => {
    return (
       <HeadingStyle>
           <H1>
               Images
           </H1>
           <p>Scroll and Explore.....</p>
           
       </HeadingStyle>
    )
}

export default Heading;