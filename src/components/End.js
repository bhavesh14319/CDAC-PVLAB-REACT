import React, { useState } from 'react'
import { useEffect } from 'react';
import swal from "sweetalert";
import '../css/Board.css'


const End = () => {

    const showAlert = ()=>{
        swal({
            title:"Hurray, You have completed this level 🖖",
            text: `Let's check your understangs 😉 \n Quiz is enabled for you.`,
            confirmButtonColor: 'red',
        })
    }

    useEffect(()=>{
        showAlert();
    },[]);

  return (
    <div>
        <div className="textBox">You Have Reached End {showAlert}</div>
        
    </div>
  )
}

export default End;
