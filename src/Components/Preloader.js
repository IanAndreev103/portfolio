import React from 'react';
import styled from 'styled-components';

function Preloader() {

  return (
    <Wrapper className='preloader'>
       <img src="preloader/ripple.svg" alt="preloader"/>
    </Wrapper>
  )
}

export default Preloader;

const Wrapper = styled.div`
    position: fixed;
     display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    z-index: 200;
    background-color: white;

`