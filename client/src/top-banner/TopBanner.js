import React, {useState} from 'react'
// import Calendar from 'react-calendar'
// import SearchBar from './SearchBar'
// import bgImage from '../assets/sxnp3hcv7tyzrq15uobmdwi98aefkg24.jpeg'

export default function TopBanner() {
    // const [value, setValue] = useState(null);
    // const [showCalendar, setShowCalendar] = useState(false)


    
  return (
    <section className='top-banner-section'>
        {/* <div className='image-container'>
            <img src={bgImage} alt="Discover amazing experiences" width="1600px" height="500px" className='top-banner-image'/>
        </div> */}
        <div className='top-banner-content-wrapper'>
            <div className='top-banner-content'>
                <h1 className='top-banner-title'>Discover amazing experiences</h1>
                <form>   
                    <div className='top-banner-search-bar'>
                        <input type='text' placeholder='Search your destination' />
                    </div>
                    <div className='date-picker-input'>
                        <input type="date" id='select-date' />
                        <button type="submit" title="Search">Search</button>
                    </div>
                </form>     
            </div>
        </div>
    </section>
  )
}
