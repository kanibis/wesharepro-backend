import React from 'react'
import './Gallery.css'

export default function Gallery() {
  return (
    <div className='add-photo-section'>
      <div className='add-photo-form'>
          <div className='add-photos-heading'>
              <h2>Gallery</h2>
          </div>
          <div className='add-photos-form-content'>
              <div className='upload-heading'>
                  Upload Photos
              </div>
              <div className='upload-btn'>
                  <button>Upload <span><i className="fa-solid fa-upload"></i></span></button>
              </div>
              <div className='photos-description'>
                  <p>Maximum upload file size: 100 MB. Drag to reorder.</p>
                  <p>Note: First image selected for listing will be featured image of this listing.</p>
              </div>
              
          </div>
        </div>
    </div>
  )
}
