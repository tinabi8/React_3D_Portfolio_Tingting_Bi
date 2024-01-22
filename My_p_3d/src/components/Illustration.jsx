import React from 'react'
import styled from 'styled-components';

const Img = styled.img`
   width: 1000px;
   height: 800px;
   object-fit: contain;

   top: 0;
   bottom:0;
   left: 0;
   right: 0;
   margin: auto;
  
   @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }

   animation: animate 4s infinite ease alternate;
   @keyframes animate {
   to{
     transform: translateY(-80px);
     }
  }
  `;

const Illustration = () => {
  return (
    <div>
        <Img src="./img/works_1.png"alt="works"/>

    </div>
  )
}

export default Illustration