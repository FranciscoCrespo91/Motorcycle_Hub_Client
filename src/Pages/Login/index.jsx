import './styles.css'
import {useState, useContext} from 'react'; 
import {Link, useNavigate} from 'react-router-dom'; 
import authService from '../../Services/auth.service';
import {AuthContext} from "../../Context/auth.context";


function LoginPage() {
  // Write State 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage]= useState(undefined);

  const navigate = useNavigate();

  // destructuring the authContext Object
  const {storeToken, authenticateUser} = useContext(AuthContext);

  // Handle Functions that handle the change of inputs
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

  // Handle Submit of the form 
  const handleLoginSubmit = (e) =>{
    e.preventDefault();

    const requestBody = {email, password};

    authService.login(requestBody)
        .then((response)=>{
            storeToken(response.data.authToken);
            // authenticate the User
            authenticateUser();

            navigate('/');
        })     
        .catch((error) =>{
            const errorDescription = error.response.data.message; 
            setErrorMessage(errorDescription);
        })
  }
    

  return (
    <div className="LoginPage">
      <h1>Login</h1>

      <form onSubmit={handleLoginSubmit}>
        <div className='input-fields'>
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={handleEmail}/>
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={handlePassword}/>
        </div>
        <div>
          <button className='login-btn' type="submit">Login</button>
        </div>
      </form>
      { errorMessage && <p className="error-message">{errorMessage}</p> }

      <p>Don't have an account yet?</p>
      <Link to={"/signup"}> Sign Up</Link>
  </div>
  )
}

export default LoginPage