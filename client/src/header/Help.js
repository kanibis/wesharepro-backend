import React from 'react'
import './Help.css'

export default function Help() {
  return (
    <div className='help-container'>
        <div className='help-section'>
          <h1 className='help-title'>How can we help you?</h1>
          <div className='instant-help'>
            <div className='booking check-booking'>Check booking status</div>
            <div className='booking change-booking'>Change booking</div>
            <div className='booking cancel-booking'>Cancel booking</div>
          </div>
        </div>
        <div className='searchFaqs'>
            <h2>Search FAQs</h2>
            <div className='search-box'>
              <input type='text' className='input-search-bar' placeholder='Enter a keyword or search FAQs here' />
              <button className='search-btn'>
                  <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
        </div>
        <div className='help-center-section common-FAQs'>
          <div className='common-FAQs-content'>
            <h2 className='common-FAQs-content-title'>Explore common FAQs</h2>
            <div className='common-FAQs-content-list'>
              <div className='FAQ'>
                <div className='ques'>When will I receive my booking confirmation?</div>
                <div><i className="fa-solid fa-chevron-down"></i></div>
              </div>
              <div className='FAQ'>
                <div className='ques'>Can I book an activity on behalf of someone else?</div>
                <div><i className="fa-solid fa-chevron-down"></i></div>
              </div>
              <div className='FAQ'>
                <div className='ques'>How can I cancel/refund my booking?</div>
                <div><i className="fa-solid fa-chevron-down"></i></div>
              </div>
              <div className='FAQ'>
                <div className='ques'>I can't log into my WeShare account. What can I do?</div>
                <div><i className="fa-solid fa-chevron-down"></i></div>
              </div>
              <div className='FAQ'>
                <div className='ques'>How to plan your trip?</div>
                <div><i className="fa-solid fa-chevron-down"></i></div>
              </div>
              <div className='FAQ'>
                <div className='ques'>My activity offers pickup. How can I schedule a pickup?</div>
                <div><i className="fa-solid fa-chevron-down"></i></div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
