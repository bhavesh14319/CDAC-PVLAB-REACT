import React from 'react'
import '../css/navbar.css'
import simulation from '../components/images/Simulation.png'
import Theory from '../components/images/Theory.png'
import Heading from './Heading'
import Quiz from "./Quiz";



const Navbar = () => {
  return (
    <div>
        <nav className='navContainer'>
            <ul>
                <li>
                    <img src={Theory} alt=""/>
                    Theory
                </li>
                <li>
                    <img src={simulation} alt=""/>
                    Simulation
                </li>
            </ul>

            <h2>Probability Lab</h2>
        </nav>
        <Heading/>
        <Quiz/>
     
    </div>
  )
}

export default Navbar
