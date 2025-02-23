import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { ProjImg } from "../Config/Config";
import { AnimatePresence, motion } from "framer-motion";
import Works from "../Components/Works";

const Portfolio = () => {
  const [isActive, SetIsActive] = useState("all")
  const [items, setitems] = useState([]);
  const [collection, setCollection] = useState([]);

  // const sortItem = (Items) =>{
  //   const result = Items.sort(function (a, b) {
  //     const nameA = a.name.toUpperCase();
  //     const nameB = b.name.toUpperCase();
  //     if (nameA > nameB) {
  //       return 1;
  //     }
  //     if (nameA < nameB) {
  //       return -1;
  //     }
  //     return 0;
  //   });
  //   return result;
  // }

  // const filterItem = (categItem) => {
  //     SetIsActive(categItem)
  //     const updatedItems = ProjImg.filter((curElem) => {
  //       return curElem.category === categItem;
  //     });
  //     const result = sortItem(updatedItems)
  //     setitems(result);
    
  // };

  // console.log(isActive)

  useEffect(()=>{
     setitems(ProjImg);
     setCollection([...new Set(ProjImg.map((item)=>item.category))])
  }, [])

  return (
    <Wrapper>
      <div className="card-inner p-section">
        <div className="card-wrap">
          <div className="content work">
            <div className="title" data-aos="fade-up">
              <span className="first-word">Work </span>
              Experience
            </div>
          </div>
          <div className={`p-btns`} data-aos="fade-up">
          {/* {
            collection.map((item)=>{
              return (
            //     <button
            //     key={item}
            //     className={`btn p-btn ${isActive === item ? "active" : ""}`}
            //     data-btn-num="2"
            //     onClick={() => filterItem(item)}
            // >
            //   {item}
            // </button>
              )
            })
          } */}
           
          </div>
          <motion.div layout className="grid-items">
            <AnimatePresence>
              {items &&
                items.map((item) => <Works key={item.id} item={item} />)}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Portfolio;

const Wrapper = styled.section`

  .card-wrap {
    overflow: hidden;
    padding-bottom: 30px;
  }
  .content {
    margin: 0px 0px 10px;
  }
  .box-item .image .info:before {
    background: linear-gradient(
      135deg,
      rgba(120, 204, 109, 0.5) 0%,
      rgba(120, 204, 109, 0.01) 100%
    );
  }

  .box-item .image .info:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease 0s;
  }

  .p-section .grid-items {
    position: relative;
    max-width: 100vh;
    max-height: 450px;
    display: grid;
    padding: 10px;
    padding-bottom: 50px;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-column-gap: 0rem;
    grid-row-gap: 0rem;
    margin: 0 -30px;
    overflow-y: scroll;

    .grid-item {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 0;
      padding-bottom: 20px;l
      flex: 1 0 0%;
    }
    .grid-item {
      .box-item {
        position: relative;
        text-align: center;
        width: 100%;
        overflow: hidden;
        &:hover {
          img {
            transform: scale(1.2);
          }
          a {
            color: ${({ theme }) => theme.highlight.primary};
          }
          .icon-box {
            display: inline;
          }
        }
        .icon-box {
          position: absolute;
          z-index: 2;
          display: none;
          width: 100%;
          height: 100%;
          border-radius: 10px;
          background: linear-gradient(
            135deg,
            rgba(255, 152, 0, 0.2) 0%,
            rgba(255, 152, 0, 0.01) 100%
          );
          .p-icon {
            position: relative;
            top: 40%;
            z-index: 2;
            font-size: 1.2rem;
            filter: brightness(130%);
            color: ${({ theme }) => theme.highlight.primary};
            cursor: pointer;
          }
        }

        .image {
          position: relative;
          overflow: hidden;
          border-radius: 4px;
          width: 100%;
          height: 100%;

          a {
            display: initial;

            img {
              position: relative;
              width: 100%;
              height: auto;
              transition: all 0.5s;
            }
          }
        }

        .desc {
          position: relative;
          padding: 15px 0 0 0;
          margin-bottom: 1rem;
          
          a {
            font-size: 0.95rem;
            display: flex;
            justify-content: center;
            height: 100%;
            padding-bottom: 10px;
            text-transform: capitalize;
            &::before {
              right: auto;
              left: 0;
              bottom: 0;
              top: auto;
              width: 100%;
              height: 1px;
              opacity: 0.5;
            }
          }
        }
      }
    }
  }
  .p-btns {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
  }

  .p-btn {
    width: auto;
    border: none;
    margin-right: 1rem;
    padding: 0;
    height: 100%;
    border-radius: 0;
    color: rgb(${({ theme }) => theme.title.primary});
    border-bottom: 1px solid transparent;
    text-transform: capitalize
  }
  .p-btn.active {
    border-bottom: 1px solid ${({ theme }) => theme.highlight.primary};
    color: ${({ theme }) => theme.highlight.primary};
  }
  .p-btn:hover,
  .p-btn:focus {
    border-radius: 0;
    border-bottom: 1px solid ${({ theme }) => theme.highlight.primary};
    box-shadow: none !important;
    color: ${({ theme }) => theme.highlight.primary};
  }
`;
