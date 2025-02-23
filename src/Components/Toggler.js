import React, { useEffect, useState } from 'react';
import { BsFillMoonFill } from "react-icons/bs";
import { useGlobalContext } from '../Context';
import {FaSun} from "react-icons/fa"
import styled from "styled-components"


const Toggler = () => {
    const {isdarkMode, toggleTheme} = useGlobalContext();
    
    let [toggle, setToggle] = useState(isdarkMode);
  
    const toggleMode = (e) => {
      toggleTheme();
      if(e.target.checked)
      setToggle(!isdarkMode)
    
    };
  
    useEffect(() => {
        toggle ? document.body.className = "dark-theme" : document.body.className = "light-theme" ;
    }, [toggle]);

    console.log(isdarkMode)
  
  return (
    
    <Wrapper className='skin'>
        <input type="checkbox" className='checkbox' id='checkbox' onChange={toggleMode} />
        <label htmlFor="checkbox" className='checkbox-label'>
          <div className="link light icon">
                <FaSun/>
              </div>
               <div className="link dark icon">
                <BsFillMoonFill />
              </div>
        <span className='ball'></span>
        </label>
    </Wrapper>
  )
}

export default Toggler

const Wrapper = styled.div`
display:flex;
justify-content: center;
align-items: center;
font-size: 16px;
position: relative;
z-index: 100;
margin-right: 1rem; 
@media (min-width: 561px) {
  position: absolute;
  margin-right: 0;
  right: 30px;
  top: 15px;
}

.checkbox {
    opacity: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0;
    /* border: none; */
}
.checkbox:checked+.checkbox-label .ball {
    transform: translateX(24px);
  }
.checkbox-label{
    background-color: rgb(0, 0, 0);
    width: 50px;
    height: 26px;
    border-radius: 50px;
    position: relative;
    padding: 5px 7px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
   
    .ball{
      background-color: #fff;
      width: 18px;
      height: 18px;
      position: absolute;
      left: 4px;
      top: 4px;
      border-radius: 50%;
      transition: transform 0.2s linear;
    }
   
}
.link {
      position: relative;
      display: flex;
      line-height: 0;
      height: 100%;
      font-size: 2rem;
      align-items: center;
      justify-content: between;
      max-width: 14px;
  color: #ff9800;
      &::before {
        content: normal;
      }
    }

`