import React from 'react'
import './General.css'

export default function General() {
  return (
    <div className='general-section'>
        
        <div className='general-form'>
            <div className='general-heading'>
                <h2>General</h2>
            </div>
            <div className='general-form-content'>
                <div className='title-heading'>
                    Title
                </div>
                <div>
                    <input type='text' className='title-details' />
                </div>
                <div className='description-heading'>
                    Description
                </div>
                <div>
                    
                    <textarea className='description-details'></textarea>
                    {/* <input type='text' className='description-details' /> */}
                </div>
            </div>
        </div>
    </div>
  )
}
