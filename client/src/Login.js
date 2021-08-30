import React, {useState} from 'react'
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [auth, setAuth] = useState(false);
    const [data, setData] = useState({
        email:"",
        pass: ""
    });
    const changeHandler = e => {
        setData({...data, [e.target.name]:e.target.value})
    };
    const submitHandler = e => {
        e.preventDefault();
        console.log('login data is: ', data);
        axios.post('http://localhost:5001/login', data)
        .then(res=> {
                console.log('login api res--: ',res)
                localStorage.setItem('authToken', res.data.token);
                setAuth(true)
        })
        .catch(err=>{
            console.log('login API error---',err);
        });
    }
    if(auth){
        return <Redirect to="/dashboard"/>
    }

    return (
        <div>
            
            <form onSubmit={submitHandler} autoComplete="off">
                <div>
                    <input type="email" name='email' placeholder='Enter email' onChange={changeHandler} required/>
                </div>
                <div>
                <input type="password" name='pass' placeholder='Enter password' onChange={changeHandler} required/>
                </div>
                <input type='submit' value='Login'/>
            </form>
            <p>Want to create new account? <Link to="/register">Sign Up</Link></p>

        </div>
    )
}
export default Login;