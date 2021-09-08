import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import mainLogo from './mainLogo.png';
import swal from 'sweetalert';

const Login = () => {
    
    const [auth, setAuth] = useState(false);
    const [data, setData] = useState({
        email: "",
        pass: ""
    });
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    };
    const submitHandler = e => {
        e.preventDefault();
        console.log('login data is: ', data);
        axios.post('http://localhost:5001/login', data)
            .then(res => {
                console.log('login api res--: ', res)
                localStorage.setItem('authToken', res.data.token);
                setAuth(true)
            })

            .catch(err => {
                console.log('login API error---', err);
            });
        swal("Good Job!",
            "You Have Successfully Logged in to Freelancer",
            {
                icon: "success",
                timer: 2000,
                button: false,
            });
    }
    if (auth) {
        return <Redirect to="/dashboard" />
    }


    return (
        <div>
            {/* Tis is header section for login page */}
            <div style={{ width: '100%', height: '100px', backgroundColor: '#0b99a5', marginTop: '-20px' }}>

                {/* This is about freelancer for home page option in header section */}
                <div style={{ backgroundColor: 'tamota', textAlign: 'cente', lineHeight: '93px', width: '270px', height: '100px' }}>
                    <h1 style={{ color: 'white', fontSize: '28px', marginLeft: '10px', fontFamily: "sans-serif" }}><button><a href="http://localhost:3000/">Freelancer</a></button></h1>
                </div>

                {/* This is about register page option in header section */}
                <div style={{ marginLeft: "85%", lineHeight: '82px', marginTop: '-120px', fontSize: '13px' }}>
                    <h1 style={{ marginTop: '30px', height: '77px', width: '74px', textAlign: 'center', }}> <button><Link to="/register">Register</Link></button></h1>
                </div>

                {/* This is about login page option in header section */}
                <div style={{ marginLeft: "91%", lineHeight: '197px', marginTop: '-164px', fontSize: '13px' }}>
                    <h1 style={{ marginTop: '30px', height: '77px', width: '74px', textAlign: 'center' }} > <button> <Link to="/login">login</Link></button></h1>
                </div>

            </div>

            {/* This is about body section for inputes */}
            <form onSubmit={submitHandler} autoComplete="off" style={{ boxShadow: ' rgb(125 128 125) 1px 1px 18px 4px', width: '350px', height: '400px', backgroundColor: 'white', marginTop: '7%', marginLeft: '36%' }}>

                <img src={mainLogo} alt="logo" style={{ width: '135px', height: '100px', position: 'absolute', marginTop: '3%', marginLeft: '9%' }} />
                <div style={{ paddingTop: '169px', marginLeft: '25%' }}>
                    <input type="email" name='email' placeholder='Enter email' onChange={changeHandler} required />
                </div>

                <div style={{ marginLeft: '25%', marginTop: '3%' }}>
                    <input type="password" name='pass' placeholder='Enter password' onChange={changeHandler} required />
                </div >

                <div style={{ marginLeft: '41%', marginTop: '7%' }}>
                    <input type='submit' value='Login' />
                </div>

                <div style={{ width: '88px', height: '30px', marginTop: '14%', marginLeft: '69%', lineHeight: '24px', textAlign: 'center', fontSize: '17px', fontFamily: 'sans-serif' }}>
                    <p><Link to="/register">Register</Link></p>
                </div>
                <div style={{ width: '224px', height: '30px', marginTop: '-13%', marginLeft: '3%', textAlign: 'center', lineHeight: '26px', fontSize: '16px', fontFamily: 'sans-serif', color: '#8b8bda' }}>
                    <p>if you don't have an account?</p>
                </div>
            </form>
        </div>
    )
}
export default Login;