import React from 'react'
import "../css/sidebar.css"

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
		  		<li >Level 1</li>
		  		<li >Level 2</li>
		  		<li > Level 3</li>
                <li >Level 4</li>
		  	</ul>                         
	  </div>
      
    </div>
  )
}

export default Sidebar
