import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from "react";                     
import { AuthContext} from '../../Context/auth.context'

import UserCard from "../../Components/UserCard";
import './styles.css'

const apiURL = import.meta.env.VITE_APP_SERVER_URL;


function UserProfile() {
  const { isLoggedIn, user } = useContext(AuthContext); 
  const [userData, setUserData] = useState();

  
  const getUserData = async ()=>{
    try {
      console.log(user)
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
    <div className="profile-page">
      {!isLoggedIn && (
        <div>
          <p>Please <a href="/login">Login</a> to view your profile page</p>
        </div>
      )}
      {isLoggedIn && (
        <div>
          <section>
            {!userData && (
              <div>
                <p>Loading</p>
              </div>
            )}
            {userData &&(
              <div className="profile-user-card">
                <h1 className="title"> {userData.name}'s Profile</h1>
                <UserCard userData={userData}/>
              </div>
            )}
          </section>
       </div>
      )}
    </div>

  )
}

export default UserProfile