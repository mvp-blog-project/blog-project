import React from 'react';

//it just nav bar that when we click on ann of list items it well change view by the invokation of the click function
const Nav =(props)=>(
  <div className="nav">
  <div className="navlist">
  <li className="items" onClick={()=>{props.click('home')}}>Home</li>
  <li className="items" onClick={()=>{props.click('Postes')}}>Postes</li>
  <li className="items" onClick={()=>{props.click('New Blog')}}>New Blog</li>
  </div>
 </div>
)


export default Nav;