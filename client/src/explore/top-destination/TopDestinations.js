import React from 'react'
import './TopDestination.css'
import {imageData} from './data.js' 

export default function TopDestinations() {
    
  return (
    <div className='top-destination-container'>
        <h2>Top Destinations</h2>
        <div className='destination-image-carousel'>
            {imageData.map((item) => (
                    <div key={item.id} className='image-carousel-item'>
                        <div className="carousel-item-content">
                            <div className='destination-image'>
                                <div className="image-overlay"></div>
                                <img src={item.imgLink} alt={item.alt} />
                            </div>
                            <h3 className='destination-city'>{item.city}</h3>
                        </div>       
                    </div>              
            ))}
        </div>
    </div>
  )
}
