import React, {useState} from 'react'
import axios from 'axios'
import Loader from '../Tools/Loader';
import Error from "../Tools/Error";


function LoginPage(){
    
    const [email, setloginid] = useState('')
    const [password, setpassword] = useState('')
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState();
    async function login() {
        
            const user = {
                email,
                password
            }
            try {
                setloading(true);
                const response = await axios.post(' https://sdaf-ijn7.onrender.com/api/user/login', user)
                const result = response.data;
                console.log(result)
                setloading(false)
                if(result)
              {  window.location.href='/main'
                localStorage.setItem('currentUser', JSON.stringify(result))}
               
             } catch (error) {
                 console.log(error);
                 setloading(false)
                 seterror(true)

             }
            
    }
    return (
        <div>
            {loading && (<Loader/>)}
            <div className="row justify-content-center mt-5">

                <div className="col-md-5 mt-5">
                    {error && (<Error message='Invalid credintials'/>)}

                    <div className='bs'>
                        <h2>Login</h2>
                        <input type="text" className="form-control" placeholder="email"
                            value={email} onChange={(e) => { setloginid(e.target.value) }}
                        />

                        <input type="text" className="form-control" placeholder="password"
                            value={password} onChange={(e) => { setpassword(e.target.value) }}
                        />
                        <button className='btn btn-primary mt-3' onClick={login}> Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;