import React from 'react'
import '../css/ImagePopUp.css'

const ImagePopUp = () => {
    function closePopUp(){
        let cont = document.querySelector('.poppedImageContainer');
        cont.style.display="none";
    }
  return (
    <div className='poppedImageContainer'>
        <div className="popImageContainer fadeInClass">
        </div>
        <div className="closeIcon" onClick={closePopUp}>
                <span>&#10006;</span>
        </div>
    </div>
  )
}

export default ImagePopUp
