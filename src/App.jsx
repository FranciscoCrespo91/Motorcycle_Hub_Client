import './App.css'
import {Routes, Route} from 'react-router-dom';

/* Components Imports */
import ResponsiveAppBar from './Components/Navbar';

import SignUpPage from './Pages/Signup';
import LoginPage from './Pages/Login';
import UserProfile from './Pages/UserProfile';
  //import create UserMotorcycle

import HomePage from './Pages/Home';
import MotorcyclesPage from './Pages/Motorcycles';
import MarketPlacePage from './Pages/Marketplace';
  import CreateCard from './Pages/Marketplace/createCard';
import AboutUsPage from './Pages/AboutUs';
import BrandsPage from './Pages/Brands/index'
import EditCard from './Pages/Marketplace/editCard';


function App() {


  return (
    
    <div>
        <ResponsiveAppBar/>
      
      <Routes>

        {/* Routes go here */}
        <Route path='/' element = {<HomePage/>} />
        <Route path="/marketplace" element={<MarketPlacePage/>}/> 
        <Route path="/marketplace/create" element={<CreateCard/>}/>
        <Route path='/marketplace/edit/:cardId' element={<EditCard/>}/>
        <Route path="/motorcycles" element={<MotorcyclesPage/>}/> 
        <Route path="/motorcycles/:brand" element={<BrandsPage/>}/> 
        <Route path="/aboutus" element={<AboutUsPage/>}/> 

        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>    
        <Route path="/profile" element={<UserProfile/>}/>    
        
        {/* <Route path="/signup" element={<IsAnon><SignUpPage/></IsAnon>}/>
        <Route path="/login" element={<IsAnon><LoginPage/></IsAnon>}/> */}

      </Routes>


    </div>
     
  )
}

export default App
