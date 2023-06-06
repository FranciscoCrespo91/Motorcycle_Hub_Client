import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from "react";                     
import { AuthContext} from '../../Context/auth.context'

import UserCard from "../../Components/UserCard";

const apiURL = 'http://localhost:5005/api';


function UserProfile() {
  const { isLoggedIn, user } = useContext(AuthContext); 
  const [userData, setUserData] = useState();

  
  const getUserData = async ()=>{
    try {
      let apiResponse = await axios.get(`${apiURL}/profile/${user._id}`)
      
      setUserData(apiResponse.data);
      console.log(apiResponse.data)
  
    }catch(error){
      console.log('Client API get User Data', error)
    }
  };

  useEffect(()=>{
    getUserData();
    console.log(userData)
  },[user]);

  return (
    <div>
      <h1>UserProfile</h1>

      <div>
        {userData &&(
          <UserCard userData={userData}/>

        )}
        {!userData && isLoggedIn && (
          <div>
            <p>Loading</p>
          </div>
        )}
        {!isLoggedIn && (
          <div>
            <p>Please <a href="/login">Login</a> to view your profile again</p>
          </div>
        ) }
      </div>
    
    </div>

  )
}

export default UserProfile