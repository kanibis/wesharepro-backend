import React from 'react'
import './Submission.css'
// import ListingSidebar from './ListingSidebar'
// import ListingSidebarResult from './ListingSidebarResult'
// import './ListingSidebar.css'
// import { SidebarData } from './SidebarData';
import logo from '../../assets/We-Share-Logo-Green.png'
import { Link } from 'react-router-dom'

import AboutTheListing from './AboutTheListing'
import Category from './Category'
import Gallery from './Gallery'
import General from './General'
// import ListingSidebar from './ListingSidebar'
// import './ListingSidebarResult.css'
import Pricing from './Pricing'
import { useState } from 'react';
import Reservation from './Reservation'
import Finish from './Finish'
import Publish from './Publish'

export default function Submission() {

  const [general, setGeneral] = useState(true)
  const [gallery, setGallery] = useState(false)
  const [listing, setListing] = useState(false)
  const [pricing, setPricing] = useState(false)
  const [category, setCategory] = useState(false)
  const [reservation, setReservation] = useState(false)
  const [finish, setFinish] = useState(false)
  const [publish, setPublish] = useState(false)

  const handleGeneral = () => {
    setGeneral(true)
    setGallery(false)
    setListing(false)
    setCategory(false)
    setPricing(false)
    setReservation(false)
    setFinish(false)
    setPublish(false)
  }

  const handleGallery = () => {
    setGallery(true)
    setGeneral(false)
    setListing(false)
    setCategory(false)
    setPricing(false)
    setReservation(false)
    setFinish(false)
    setPublish(false)
  }

  const handleListing = () => {
    setGallery(false)
    setGeneral(false)
    setListing(true)
    setCategory(false)
    setPricing(false)
    setReservation(false)
    setFinish(false)
    setPublish(false)
  }

  const handleCategory = () => {
    setGallery(false)
    setGeneral(false)
    setListing(false)
    setCategory(true)
    setPricing(false)
    setReservation(false)
    setFinish(false)
    setPublish(false)
  }

  const handlePricing = () => {
    setGallery(false)
    setGeneral(false)
    setListing(false)
    setCategory(false)
    setPricing(true)
    setReservation(false)
    setFinish(false)
    setPublish(false)
  }

  const handleReservation = () => {
    setGallery(false)
    setGeneral(false)
    setListing(false)
    setCategory(false)
    setPricing(false)
    setReservation(true)
    setFinish(false)
    setPublish(false)
  }

  const handleFinish = () => {
    setGallery(false)
    setGeneral(false)
    setListing(false)
    setCategory(false)
    setPricing(false)
    setReservation(false)
    setFinish(true)
    setPublish(false)
  }

  const handlePublish = () => {
    setGallery(false)
    setGeneral(false)
    setListing(false)
    setCategory(false)
    setPricing(false)
    setReservation(false)
    setFinish(false)
    setPublish(true)
  }

  return (
    <div className='submission-container'>
      <div className='sidebar'>
        {/* <div className='logo-container'>
          <img src={logo} />
        </div> */}
        <ul className='sidebar-list'>
          <li className='sidebar-row' onClick={handleGeneral}>
            <div>General</div>
          </li>
          <li className='sidebar-row' onClick={handleGallery}>
            <div>Gallery</div>
          </li>
          <li className='sidebar-row' onClick={handleListing}>
            <div>AboutTheListing</div>
          </li>
          <li className='sidebar-row' onClick={handleCategory}>
            <div>Category</div>
          </li>
          <li className='sidebar-row' onClick={handlePricing}>
            <div>Pricing</div>
          </li>
          <li className='sidebar-row' onClick={handleReservation}>
            <div>Reservation</div>
          </li>
          <li className='sidebar-row' onClick={handleFinish}>
            <div>Finish</div>
          </li>
          <li className='sidebar-row' onClick={handlePublish}>
            <div>Publish</div>
          </li>
        </ul>
      </div>
      <div className='sidebar-result'>
        <div className='experience-section'>
          <div className='submit-experience'>
            <h2>Submit New Experience</h2>
          </div>
          <div className='exit-container'>
            <Link to='/'>
              {/* <button className='exit-btn'> */}
                Exit
              {/* </button> */}
            </Link>
          </div>
        </div>
        {general ? <General /> : null}
        {gallery ? <Gallery /> : null}
        {listing ? <AboutTheListing /> : null}
        {category ? <Category /> : null}
        {pricing ? <Pricing /> : null}
        {reservation ? <Reservation /> : null}
        {finish ? <Finish/> : null}
        {publish ? <Publish/> : null}
      </div>
    </div>
  )
}
