import React from 'react'
import AboutTheListing from './AboutTheListing'
import Category from './Category'
import Gallery from './Gallery'
import General from './General'
import ListingSidebar from './ListingSidebar'
import './ListingSidebarResult.css'
import Pricing from './Pricing'

const ListingSidebarResult = () => {
  return (
    <div className='sidebar-result'>
        <div className='experience-section'>
            <div className='submit-experience'>
                <h2>Submit New Experience</h2> 
            </div>
            <div className='exit'>
                <button className='exit-btn'>Exit</button>
            </div>
        </div>
        <General/>
        <Gallery/>
        <AboutTheListing />
        <Category/>
        <Pricing/>
    </div>
  )
}

export default ListingSidebarResult