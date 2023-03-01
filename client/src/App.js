import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopAttraction from './explore/top-attraction/TopAttraction';
import TopDestinations from './explore/top-destination/TopDestinations';
import TopPlaces from './explore/top-places/TopPlaces';
import SocialMedia from './footer/connect-with-us/SocialMedia';
import { Footer } from './footer/footer/Footer';
// import GlobalPresence from './footer/GlobalPresence/GlobalPresence';
import Header from './header/Header'
import TopBanner from './top-banner/TopBanner';
import Login from './header/user-account/Login';
import SignUp from './header/user-account/SignUp';
import Home from './Home';
import SupplierRegister from './header/user-account/supplier-account/SupplierRegister'
import SupplierLogin from './header/user-account/supplier-account/SupplierLogin'
import Help from './header/Help';
// import ListingSidebar from './header/add-listing/ListingSidebar'
import General from './header/add-listing/General'
import Gallery from './header/add-listing/Gallery'
import Submission from './header/add-listing/Submission';
import PrivateComponent from './header/user-account/PrivateComponent';
import AboutTheListing from './header/add-listing/AboutTheListing';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* <Route element={<PrivateComponent />}> */}
          <Route exact path="/" element={<Home/>}/>
          <Route path="/help" element={<Help/>} />
          <Route path="/login" element={<Login/>} />
          {/* </Route> */}
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/logout" element={<h1>Logout</h1>} />
          
          <Route path="/supplier-registration" element={<SupplierRegister/>} />
          <Route path="/supplier-login" element={<SupplierLogin/>} />
          <Route path="/submission" element={<Submission/>} />
        </Routes>
      </div>  
    </Router>  
  );
}

export default App;
