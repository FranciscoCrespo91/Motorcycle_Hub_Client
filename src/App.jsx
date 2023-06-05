import './App.css'
import {Routes, Route} from 'react-router-dom';

/* Components Imports */
import SignUpPage from './Pages/Signup';
import LoginPage from './Pages/Login';

import ResponsiveAppBar from './Components/Navbar';
import HomePage from './Pages/Home';
import MotorcyclesPage from './Pages/Motorcycles';
import MarketPlacePage from './Pages/Marketplace';
import AboutUsPage from './Pages/AboutUs';


function App() {


  return (
    
    <div>
        <ResponsiveAppBar/>
      
      <Routes>

        {/* Routes go here */}
        <Route path='/' element = {<HomePage/>} />
        <Route path="/marketplace" element={<MarketPlacePage/>}/> 
        <Route path="/motorcycles" element={<MotorcyclesPage/>}/> 
        <Route path="/aboutus" element={<AboutUsPage/>}/> 

        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>     
        {/* <Route path="/signup" element={<IsAnon><SignUpPage/></IsAnon>}/>
        <Route path="/login" element={<IsAnon><LoginPage/></IsAnon>}/> */}

      </Routes>


    </div>
     
  )
}

export default App
