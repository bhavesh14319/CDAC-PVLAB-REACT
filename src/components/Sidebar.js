import React from 'react'
import "../css/sidebar.css"
import {BrowserRouter as Router, Link, Routes} from 'react-router-dom';

const Sidebar = () => {



  return (
    <div >
       {/* <div className="sidebarContainer" id="sidebar">
            <ul className='sidebar-ul'>
                <li className="link-1">
                    Level 1
                </li>
                <li className="link-2">
                    Level 2
                </li>
                <li className="link-3">
                    Level 3
                </li>
                <li className="link-4">
                    Level 4
                </li>
            </ul>
       </div> */}


     <div id="sidebar">
      
		  	<ul id='sidebar-ul' className='sidebar-ul' >
		  	<a href="/singlecoin"><li>Single Coin</li></a>
		  	<a href="/twocoin"><li >Two Coin</li></a>
		  	<a href="/singledice"><li >Single Dice</li></a>
        <a href="/doubledice"><li >Double Dice</li></a>
		  	</ul> 
                           
	  </div>
  
    </div>
  )
}

export default Sidebar
