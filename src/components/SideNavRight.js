import React from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import '../css/SideNavRight.css'

const SideNavRight = () => {
  return (
    <div>
        <div className="SideNavRight__hamBurgerIcon">
            <MenuOutlinedIcon className='menuIcon'></MenuOutlinedIcon>
        </div>
        <div className="SideNavRight__sideNavContainer">
            <div className="SideNavRight__navContainer">
                <ul className='SideNavRight__sideNavUl'>
                    <li>Level-1</li>
                    <li>Level-2</li>
                    <li>Level-3</li>
                    <li>Level-4</li>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default SideNavRight
