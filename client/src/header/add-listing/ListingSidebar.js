import React from 'react'
import {Link} from 'react-router-dom';
import './ListingSidebar.css'
import { SidebarData } from './SidebarData';
import logo from '../../assets/We-Share-Logo-Green.png'

const sidebar = () => {

  const generalState = 'true';
  const galleryState = false;

  function handleClickSide(e) {
    console.log(e.target.id)
    // if (e.target.value == 'General') {
    //   generalState = true
    //   galleryState = false
    // } else if (e.target.value == 'Gallery') {
    //   galleryState = true
    //   generalState = false
    // }
  }

  // document.querySelector('.sidebar-row').addEventListener('click', function(e) {
  //   console.log(e)
  // })

  return (
    <div className='sidebar'>
      <div className='logo-container'>
        <img src={logo}/>
      </div>
      <ul className='sidebar-list'>
        {SidebarData.map((val, key) => {
          return (
            <li key={key} className='sidebar-row' id='xyz' onClick={handleClickSide}>
              
              <div>{val.icon}</div> <div>{val.title}</div>
            </li>
          )
        })}
      </ul>
      
    </div>
  )
}

export default sidebar

// id={window.location.pathname == val.link ? "active" : ""}