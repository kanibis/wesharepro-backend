import React from 'react'
import './SocialMedia.css'

const style = {
    fontSize: '48px',
    marginRight: '30px',
}

export default function SocialMedia() {
  return (
    <div className='contact-us-container'>
        <h2>Connect with us</h2>
        <div className='social-media-icons'>
            <a href='#'><i className="fa-brands fa-facebook" style={style}></i></a>
            <a href='#'><i className="fa-brands fa-instagram" style={style}></i></a>
            <a href='#'><i className="fa-brands fa-twitter" style={style}></i></a>
            <a href='#'><i className="fa-brands fa-linkedin" style={style}></i></a>
        </div>
    </div>
  )
}
