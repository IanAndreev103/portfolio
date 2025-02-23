import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components"

function ErrorPage() {
  return (
<Wrapper>
<section className="page_404">
	<div className="error_container">
		<div className="row">	
		<div className="col-sm-12 ">
		<div className="col-sm-12 col-sm-offset-1  text-center">
		<div className="four_zero_four_bg">
			<h1 className="text-center ">404</h1>
		</div>
		<div className="contant_box_404">
		<h3 className="h2">
		Look like you're lost
		</h3>
		<p>the page you are looking for not avaible!</p>
		<NavLink to="/" className="link_404">
        Go to Home
        </NavLink>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
</Wrapper>
  )
}

export default ErrorPage;
const Wrapper = styled.section`
.page_404 {
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  width: 100%;
  min-height: 100%;
  height: calc(100vh - 80px);
  // border: 1px solid red;

  .error_container{
    width: 100%;
    .four_zero_four_bg h1 {
      font-size: 80px;
    }
    
    .four_zero_four_bg h3 {
      font-size: 80px;
    }
    
    .link_404 {
      color: #fff;
      padding: 10px 20px;
      background: #39ac31;
      margin: 20px 0;
      display: inline-block;
      font-size: 1rem;
    }
    
    .link_404:hover{
        color: #fff;
        text-decoration: underline;
    }
    .contant_box_404 {
      margin-top: -50px;
    }
    
  }
}


`