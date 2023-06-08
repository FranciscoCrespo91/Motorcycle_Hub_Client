import './styles.css'
import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

import authService from '../../Services/auth.service';

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate  = useNavigate();

  // Handle Change of Inputs 
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName= (e) => setName(e.target.value);

  // Handle the Submission of the Form
  const handleSignupSubmit = (e) =>{
    e.preventDefault();

    const requestBody = {name, email, password};

    authService.signup(requestBody)
        .then(()=>{
            navigate('/login')
        })
        .catch((error)=>{
            const errorDescription = error.response.data.message; 
            setErrorMessage(errorDescription);
        })
  }

  return (
    <div className="signup-page">
      <div className='signup-form'>
        
        <h1>Sign Up</h1>

        <form onSubmit={handleSignupSubmit}>
            <div className='input-fields'>
              <label>Email:</label>
              <input type="email" name="email" value={email} onChange={handleEmail}/>
            
              <label>Password:</label>
              <input type="password" name="password" value={password} onChange={handlePassword}/>
            
              <label>Name:</label>
              <input type="text" name="name" value={name} onChange={handleName}/>
            </div>
            <div>
              <button type="submit" className='signup-btn'>Sign Up</button>
            </div>
        </form>

        { errorMessage && <p className="error-message">{errorMessage}</p> }

        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
    </div>
  )
}

export default SignUpPage