import { React, useEffect } from "react";
import "../css/navbar.css";
import simulation from "../components/images/Simulation.png";
import Theory from "../components/images/Theory.png";
import Heading from "./Heading";
import Quiz from "./Quiz";
import Menu from "./Menu";
import "../css/Menu.css";

const Navbar = () => {
    function toggleSidebar() {
        console.log(document.getElementById('sidebar'))
        document.getElementById('sidebar').classList.toggle('active');
        document.getElementById('sidebar-ul').classList.toggle('ulactive');
        // setTimeout(()=>{
        //     document.getElementById('sidebar-ul').classList.toggle('fadeInClass');
        // },1000)
        
        // if(!document.getElementById('sidebar').classList.contains("active")){
        //     document.getElementById('sidebar-ul').classList.toggle('fadeOutClass');
        // }
        
        
    }

    function showSidebar(e){
        
        // e.preventDefault();
        console.log("clicled")
        let cont = document.getElementById("sidebar")
        console.log(window.getComputedStyle(cont).display)
        if(window.getComputedStyle(cont).display=="none"){
            if(cont.classList.contains("translateNY")){
                cont.classList.remove("translateNY");
            }
            cont.classList.add("translateY")
            cont.style.display = "flex";
            // cont.style.display="flex";
        }else{
            if(cont.classList.contains("translateY")){
                cont.classList.remove("translateY");
            }
            cont.classList.add("translateNY")
            cont.style.display= "none";
        }

       
    }

//   useEffect(() => {
    
//   }, []);

  return (
    <div>
      <nav className="navContainer">
        <ul>
          <a href="/">
          <li>
            <img src={Theory} alt="" />
            Theory
          </li>
          </a>
          
          <a href="/singlecoin">
          <li>
            <img src={simulation} alt="" />
            Simulation
          </li>
          </a>
        </ul>

        <h2>Probability Lab</h2>
      </nav>

    {/* <button> */}
    <div className="menuContainer" >     
        <div id="webapp_cover" >
        <div id="menu_button">
          <input type="checkbox" id="menu_checkbox" onClick={toggleSidebar}/>
          <label htmlFor="menu_checkbox" id="menu_label">
            <div id="menu_text_bar" ></div>
          </label>
        </div>
      </div>
      </div>
 
      {/* </button> */}


    </div>
  );
};

export default Navbar;
