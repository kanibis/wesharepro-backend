import React from 'react'
import './AboutTheListing.css'

export default function AboutTheListing() {
  return (
    <div className='phone-no-section'>
        <div className='phone-no-form'>
            <div className='about-listing-heading'>
              <h2>About the listing</h2>
            </div>
            <div className='phone-no-form-content'>
                <div className='phone-no-heading'>
                  Add Phone Number
                </div>
                <div>
                    <input type='tel' />
                </div>
            </div>
        </div>
    </div>
  )
}
