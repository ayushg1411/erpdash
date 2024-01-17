import React, { useState } from 'react';
import axios from 'axios';
import Loader from '../Tools/Loader';
import Error from '../Tools/Error';
import img from '../assets/what-is-ERP.jpg'

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [emptyFieldsError, setEmptyFieldsError] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      setEmptyFieldsError(true);
      return;
    }

    const user = {
      email,
      password,
    };

    try {
      setLoading(true);
      const response = await axios.post('https://sdaf-ijn7.onrender.com/api/user/login', user);
      const result = response.data;

      setLoading(false);

      if (result._id) {
        // Redirect to the main page upon successful login
        window.location.href = '/main';
        localStorage.setItem('currentUser', JSON.stringify(result));
      } else {
        setError(true);
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError(true);
      setLoading(false);
    }
  };

  const handleTryAgain = () => {
    setEmail('');
    setPassword('');
    setError(false);
    setEmptyFieldsError(false);
    // You can add additional logic here if needed before retrying, like clearing the input fields.
  };

  return (

    <div className="min-h-screen flex items-center justify-start    bg-cover bg-center"  style={{ backgroundImage: `url(${img})` }}>
      {loading && <Loader />}
      <div className="bg-black p-8 rounded ml-[130px] shadow-md">
        {!error ? (
          <>
            <h2 className="text-2xl font-semibold mb-4 "> Welcome to Erp System</h2>
           <div className='flex-col'>
           <div>
           <input
              type="text"
              className={`form-input mx-1 border mb-4 ${emptyFieldsError && !email && 'border-red-500'}`}
              placeholder="LoginId"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmptyFieldsError(false);
              }}
            />
           </div>

            <div>
            <input
              type="password"
              className={`form-input mx-1 border mb-4 ${emptyFieldsError && !password && 'border-red-500'}`}
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setEmptyFieldsError(false);
              }}
            />
            </div>

            <button className="bg-blue-500 mx-1 p-1 rounded-md" onClick={handleLogin}>
              Login
            </button>
           </div>
          </>
        ) : (
          <Error message={emptyFieldsError ? 'Please fill in all fields.' : 'Invalid credentials Please '} onClicks={handleTryAgain} />
        )}
      </div>
    </div>
  );
}

export default LoginPage;
