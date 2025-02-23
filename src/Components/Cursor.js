import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

const Cursor = () => {
  const maincursor = useRef(null);

  const addCursorAnimation = useCallback((event) => {
    const { clientX, clientY } = event;
    if(maincursor.current != null){
      const mouseX = clientX - maincursor.current.clientWidth / 2;
    const mouseY = clientY - maincursor.current.clientHeight / 2;
    maincursor.current.style.transform = `translate3d(${mouseX}px,${mouseY}px,0)`;
    }
  }, [])

  
  const addClass = useCallback(() =>{
    const cursor = document.querySelector(".cursor");
    cursor.classList.add("cursor-hover");
  }, [])
  
  const removeClass = useCallback(() =>{
    const cursor = document.querySelector(".cursor");
    cursor.classList.remove("cursor-hover");
  }, [])

  useEffect(() => {
    document.addEventListener("mousemove", addCursorAnimation);
    return () => {
      window.removeEventListener("scroll", addCursorAnimation);
    };
  }, [addCursorAnimation]);

  useEffect(() => {
    let linkHover = [...document.querySelectorAll(".link")];
    linkHover.map((child) => {
      child.addEventListener("mouseover", addClass);
      child.addEventListener("mouseout", removeClass);
      return child;
    });
  }, [addClass, removeClass]);
  return (
  <Wrapper>
    <div className="cursor" ref={maincursor}>
  </div>
  </Wrapper>
  );
}

export default Cursor;

const Wrapper = styled.div`
.cursor {
    position: fixed;
    width: 30px;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    left: 0;
    right: 0;
    pointer-events: none;
    transform: translate3d(0, 0, 0);
    transition: transform 250ms ease-out;
    z-index: 100;
    opacity: 0.3;
  }
.cursor.cursor-hover {
    opacity: 1;
    width: 70px;
    height: 70px;
    background-color: transparent;
    border: 1px solid black;
  }
@media (max-width: 1010px) {
    .cursor {
      display: none;
    }
  }
  
`
