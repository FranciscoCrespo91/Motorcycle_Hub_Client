import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const apiURL = "https://motorcycle-hub-server.onrender.com/api";

function EditUserCard() {
  const { userId } = useParams();
  console.log('USERID FRont', userId)
  let userInfo;

  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [bio, setBio] = useState("");

  //Get from DB the user information to display inside the form before editing
  const getUserCardInfo = async () => {
    try {
      const apiResponse = await axios.get(`${apiURL}/profile/${userId}`);
      userInfo = apiResponse.data;
      setName(userInfo.name);
      setImg(userInfo.img);
      setBio(userInfo.bio);
    } catch (error) {
      console.log('Error on axios request on user info', error)
    }
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleImg = (e) => {
    setImg(e.target.value);
  };
  const handleBio = (e) => {
    setBio(e.target.value);
  };

  const requestBody = {
    name: name,
    img: img,
    bio: bio,
  };

  const postUserCardInfo = async () => {
    const storedToken = localStorage.getItem('authToken');
    const headers = {Authorization:`Bearer ${storedToken}`}
    try {
      await axios.put(`${apiURL}/profile/edit/${userId}`, requestBody,{
        headers:headers});
      console.log()
      setName("");
      setImg("");
      setBio("");
    } catch (error) {
      console.log('Error posting on DB',error)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    postUserCardInfo();
    navigate("/profile");
  };
  useEffect(() => {
    getUserCardInfo();
  }, []);

  return (
    <div>
      <h1>Update User</h1>
      <div>
        {
          <form onSubmit={handleSubmit}>
           
            <label>Name:</label>
            <input type="text" name="name" value={name} onChange={handleName} />

            <label>Insert Image:</label>
            <input type="text" name="img" value={img} onChange={handleImg} />

            <label>Bio:</label>
            <input type="text" name="bio" value={bio} onChange={handleBio} />

            <button type="submit">Submit changes</button>
          </form>
        }
      </div>
    </div>
  );
}
export default EditUserCard;
