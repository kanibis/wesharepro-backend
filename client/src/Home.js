import React from 'react'
import Header from './header/Header'
import TopBanner from './top-banner/TopBanner';
import TopAttraction from './explore/top-attraction/TopAttraction';
import TopDestinations from './explore/top-destination/TopDestinations';
import TopPlaces from './explore/top-places/TopPlaces';
import { Footer } from './footer/footer/Footer';
import './App.css';

function Home() {
  return (
    <div>
        <TopBanner/>
        <TopDestinations/>
        <TopPlaces/>
        <TopAttraction/>
        <Footer/>
    </div>
  )
}

export default Home