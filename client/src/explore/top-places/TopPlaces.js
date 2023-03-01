import React from 'react'
import './TopPlaces.css'
import {imageData} from './data.js' 


export default function TopPlaces() {
    
  return (
    <div className='top-place-container'>
        <h2>Top Places To Visit</h2>
        <div className='top-place-image-carousel'>
            {imageData.map((item) => (
                    <div key={item.id} className='image-carousel-item'>
                        <div className="carousel-item-content">
                            <div className='top-place-image'>
                                <img src={item.imgLink} alt={item.alt} />
                            </div>
                            <h3>{item.city}</h3>
                            <p>{item.city} is a wonderful destination.</p>
                            <p style={{color: 'orange'}}>Price: $10,000</p>
                        </div>       
                    </div>              
            ))}
        </div>
        <div className='listing-btn-container'>
            <button className='listing-btn'>Explore more listings <span style={{marginLeft: '6px', fontSize: '20px', fontWeight: 'bold'}}>&#8594;</span></button>
        </div>
    </div>
  )
}
