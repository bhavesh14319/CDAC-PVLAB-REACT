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
		  	<a href="/"><li>Level 1</li></a>
		  	<a href="/Level2"><li >Level 2</li></a>
		  	<a href="/Level3"><li >Level 3</li></a>
        <a href="/Level4"><li >Level 4</li></a>
		  	</ul> 
                           
	  </div>
  
    </div>
  )
}

export default Sidebar
