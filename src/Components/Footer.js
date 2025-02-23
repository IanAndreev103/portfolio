import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="section f-section">
      <div className="f-container">
        <div className="f-credits">
          <p>
           ©️ All rights reserved | 
          </p>
          <p> designed with <span className="text-white">❤️</span> by <span className="highlight">
            Ian Andreev</span></p>
        </div>
      </div>
    </div>
    </Wrapper>
  );
}
export default Footer;

const Wrapper = styled.footer`
 position: relative;
 width: 100vw;
 height: auto;
 bottom: 0;

.f-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.bg.primary};
    padding: 10px 0 10px 0;
    z-index: 1;
    font-size: 0.7rem;
    p {
        font-size: 0.8rem;

        .highlight{
          color: ${({ theme }) => theme.highlight.primary};
        }
        
    }
    .f-credits {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        p {
            margin: 0;
            padding-bottom: 2px;
        }
    }
}
@media (max-width: 1197px) {
    .f-section {
        z-index: 3;
        margin-top: 100px;
    }
}
@media (max-width: 560px) {
    .f-section {
        z-index: 3;
        margin-top: 70px;
    }
   .f-section .f-credits p{
    font-size: 0.71rem;
    text-align: center;
   }
}
`
