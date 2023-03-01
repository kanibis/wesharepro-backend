import React from 'react'
import './TopAttraction.css'
import { imageData } from './data'
import {attractionCategories} from './top-attraction-categories'

export default function TopAttraction() {
  return (
    <div className='top-attraction-container'>
        <h2 className='top-attraction-heading'>Top Attractions</h2>
        <div className='top-attraction-image-container'>
            {imageData.map((item, index) => (
                <div className={'attraction-city' +index}>
                    <div className="image-overlay"></div>
                    <div className='attraction-image-container'>
                        <img src={item.imgLink} alt={item.alt} />
                    </div>  
                    <h3>Top Attraction in {item.city}</h3>
                </div>
            )
            )}
        </div>
        
        <div className="top-attraction-category-container">
            <h2>Top Attraction Categories</h2>
            <div className="attraction-category">
                <ul className='attraction-category-list' >
                {attractionCategories.map((item, index) => (
                    // <div className='attraction-category-content' >
                        
                            <li className='category'>
                                <span>{+index + 1}</span>
                                <a href="#">{item.category}</a>
                            </li>
                        
                    // </div>
                ))}
                </ul>
            </div>
        </div>
    </div>
  )
}


// {imageData.slice(0,4).map((item, index) => (
//     <div className={'attraction-city'+index}>{item.imageLink}</div>
// ) 

// )}
