import React from 'react'
import '../css/navbar.css'
import simulation from '../components/images/Simulation.png'
import Theory from '../components/images/Theory.png'

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
      
    </div>
  )
}

export default Navbar
