import React from 'react'
import SocialMedia from '../connect-with-us/SocialMedia'
import GlobalPresence from '../GlobalPresence/GlobalPresence'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer-container'>
      <GlobalPresence/>
      <SocialMedia/>
      <div className='footer-content'>
        <div className='copyright'>
          <p>Copyright &#169; 2022 Weshare.</p>
        </div>
        <div className='join-us'>
          <p>Join Us</p>
        </div>
      </div>
    </div>
  )
}
