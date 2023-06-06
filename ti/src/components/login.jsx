import { BrowserRouter as Router, useNavigate} from 'react-router-dom';
import LoginForm from './loginForm';
import Home from './home';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const handleLogin = (userEmail) =>{
    setUser(userEmail);
    //navigate('/home');
  }
  
  return (
    <div className="Login">
      <ToastContainer />
      <div>
        {
          !user.length > 0 ? (
            <LoginForm setUser={handleLogin} />
          ) : (
              <Home user={user} setUser={setUser} />
          )}
      </div>
    </div>
  );
}

export default Login;
