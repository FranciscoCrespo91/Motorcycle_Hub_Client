import './App.css'
import {Routes, Route} from 'react-router-dom';

/* Components Imports */
import SignUpPage from './Pages/Signup';
import LoginPage from './Pages/Login';

import Navbar from './Components/Navbar';
import HomePage from './Pages/Home';
import MarketPlacePage from './Pages/Marketplace';



function App() {


  return (
    
    <div>
        <Navbar/>
      
      <Routes>

        {/* Routes go here */}
        <Route path='/' element = {<HomePage/>} />
        <Route path="/marketplace" element={<MarketPlacePage/>}/> 

        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>

      </Routes>


    </div>
     
  )
}

export default App
