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
      {!isLoggedIn && (
        <div>
          <p>Please <a href="/login">Login</a> to view your profile page</p>
        </div>
      )}
      {isLoggedIn && (
        <div>
          <section className="profile-user-card">
            {userData &&(
              <h1 className="title"> {userData.name}'s Profile</h1>
            )}

            <div>
              {userData &&(
                <div>
                    <UserCard userData={userData}/>
                    <a href={`/profile/edit/${userData._id}`}>Update Profile</a>
                </div>
            )}
              {!userData && (
                <div>
                  <p>Loading</p>
                </div>
              )}
            </div>
          </section>

          <section className="profile-user-motorcycle">
              <div>
                <a href="#">Create a Motorcycle</a>
                User Motorcycles go here
              </div>

          </section>
          <section className="profile-marketplace">User Marketplace cards go here</section>
       </div>
      )}
    </div>

  )
}

export default UserProfile