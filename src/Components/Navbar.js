import React, { useState } from "react";
// import "./Header.scss";
import { NavLink } from "react-router-dom";
import { ImUser } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { IoIosBrush, IoMdListBox } from "react-icons/io";
import styled from "styled-components";

import Toggler from "./Toggler";

function Navbar() {
  let [sidebar, setSidebar] = useState(false);

  return (
    <Wrapper>
      <div className={sidebar ? "header sidebar-active" : "header"}>
        <div className="menu-btn">
          <NavLink className="nav-link link" to="/">
            <img
              src="/assets/logo.jpg"
              width="244"
              height="258"
              alt="logo"
              loading="lazy"
            />
          </NavLink>
          <div className="toggle-btn">
              <Toggler/>
            <div className="toggle-header" role="button">
              <span
                className="link outline-close icon"
                onClick={() => setSidebar(false)}
              >
                <AiOutlineClose />
              </span>

              <span
                className="link outline-bars icon"
                onClick={() => setSidebar(true)}
              >
                <AiOutlineBars />
              </span>
            </div>
          </div>
        </div>
        <div className="top-menu">
          <ul>
            <li>
              <NavLink className="nav-link link" to="/" onClick={() => setSidebar(false)} >
                <span className="icon">
                  <ImUser />
                </span>
                <span className="link">About</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link link" to="/resume" onClick={() => setSidebar(false)}>
                <span className="icon">
                  <IoMdListBox />
                </span>
                <span className="link">Resume</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link link" to="/portfolio" onClick={() => setSidebar(false)}>
                <span className="icon">
                  <IoIosBrush />
                </span>
                <span className="link">works</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link link" to="/contact" onClick={() => setSidebar(false)}>
                <span className="icon">
                  <FaPhoneAlt />
                </span>
                <span className="link">contact</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;
const Wrapper = styled.section`
  .header {
    margin-right: 8px;
    position: relative;
    left: 0px;
    top: 15px;
    width: 72px;
    z-index: 50;
    text-align: center;
    border-radius: 4px;
    float: left;
    transition: 0.5s all;

    .menu-btn {
      margin-bottom: 8px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 72px;
      text-align: center;
      background: #252942;
      border-radius: 4px;
      z-index: 2;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
      .nav-link {
        height: auto;

        img {
          width: 100%;
          height: auto;
          border-radius: 50%;
        }
      }
    }

    .top-menu {
      ul {
        padding: 0;
        margin: 0;
        li {
          .nav-link {
            color: rgba(255, 255, 255, 0.85) !important;
            background: ${({ theme }) => theme.bg.primary};
            
          }
          .nav-link.active {
            .icon,
            .link {
              color: ${({ theme }) => theme.highlight.primary};
            }
          }
          a:before {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1px;
            background: radial-gradient(
              ellipse at right,
              #dddddd 0%,
              rgba(255, 255, 255, 0) 70%
            );
          }
        }
      }
    }
  }

  .header {

    .top-menu {
      width: 100%;
      font-size: 0;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

      ul li {
        display: block;
        transition: color 0.3s ease 0s;

        .nav-link {
          position: relative;
          display: block;
          text-align: center;
          padding: 13px 3px;
          height: auto;
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;

          &:hover .icon,
          &:hover .link {
            color: ${({ theme }) => theme.highlight.primary};
          }
          .link {
            position: relative;
            left: 0;
            top: 0;
            height: auto;
            width: 100%;
            line-height: 13px;
            display: block;
            font-size: 0.69rem;
            font-weight: 500;
            text-transform: uppercase;
            color: rgb(${({ theme }) => theme.title.primary});
            transition: all 0.2s ease-in;
            &:before {
              content: normal;
            }
          }

          .icon {
            margin: 0 auto;
            position: relative;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 30px;
            font-size: 1.25rem;
            color: rgb(${({ theme }) => theme.title.secondary});
            line-height: 30px;
            transition: all 0.2s ease-in;
          }
        }
      }
    }

  }

  .header{
    .toggle-header{
      display: flex;
      justify-content: center;
      align-items: center;
      .link{
        font-size: 2rem;
        height: 100%;
        color: rgb(${({ theme }) => theme.title.primary});
        &::before{
          content: none;
        }
      }
      .outline-close{
        display: none;
      }
    }
  }

  .header.sidebar-active {
   .top-menu{
    transform: translateY(0px);
   }
   .menu-btn{
    box-shadow: none;
    &:after{
      content: "";
      position: absolute;
      background-image: ${({ theme }) => theme.border.gradient1};
      bottom: 0;
      left: 0;
      height: 2px;
      width: 100%;
      z-index: 99;
    }
   }

   .toggle-header{
       .outline-close{
        display: flex;
       }
       .outline-bars{
        display: none;
       }
   }

  }

  .header .top-menu ul li:first-child a {
    border-radius: 4px 4px 0 0;
  }
  .header .top-menu ul li:last-child a {
    border-radius: 0 0 4px 4px;
  }

  .header {
      .menu-btn {
        box-shadow: none;
      }
    }



  .toggle-btn {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    top: 0;
    right: 10px;
    width: 100vw;
    height: 40px;
    z-index: 80;
    transition: all 0.3s linear;
    cursor: pointer;
  
  }

  @media screen and (max-width: 560px) {
    .header {
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 0;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      width: auto;
      height: auto;
      max-width: 100%;
      border-radius: 0;
      width: 100%;
      align-items: center;
      justify-content: center;
      

      .menu-btn {
        margin-bottom: 0px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        overflow: hidden;
        height: 50px;
        text-align: center;
        background: ${({ theme }) => theme.bg.primary};
        border-radius: 0px;
        z-index: 2;
        padding: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        .toggle-btn {
          position: relative;
        }
        .nav-link {
          height: auto;
          img {
            float: left;
            width: 40px;
            border-radius: 50%;
          }
        }
      }

      .top-menu {
        position: relative;
        width: 100%;
        display: flex;
        transition: transform 250ms ease-in-out;
        transform: translateY(-250px);

        ul {
          display: flex;
          overflow: auto;
          width: 100%;

          li {
            display: block;
            width: 100%;
            min-width: 20%;
            border-radius: 0px;
            &:first-child a,
            &:last-child a {
              border-radius: 0px;
            }

            a {
              padding: 13px 7px;
              &::before {
                background: radial-gradient(
                  ellipse at top,
                  #dddddd 0%,
                  rgba(255, 255, 255, 0) 70%
                );
                width: 1px;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 561px) and (max-width: 1199px) {
    .header {
      margin-left: -85px;
      position: fixed;
      left: auto;
      top: 60px;
      width: 72px;
      max-width: 72px;
      height: auto;
      display: block;
    }
  }

  @media (min-width: 560px) {
    .menu-btn .toggle-header {
      display: none
    }
    .header {
      .menu-btn {
        box-shadow: none;
      }
      .top-menu {
        box-shadow: none;
      }
    }
  }
`;
