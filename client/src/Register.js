import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import mainLogo from './mainLogo.png';
import swal from 'sweetalert';

const Register = () => {

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        pass: "",
        mobile: "",
        skills: ""
    });
    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    };
    const submitHandler = e => {
        e.preventDefault();
        console.log('login data is: ', data);
        axios.post('http://localhost:5001/reg', data)
            .then(res => {
                console.log('reg api res--: ', res);
                swal("Good Job!",
                "You Have Successfully Registered in to Freelancer",
                {
                    icon: "success",
                    timer: 2000,
                    button: false,
                });
            })
            .catch(err => {
                console.log('login API error---', err);
            });
    }


    return (
        <div >
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


            <div style={{ boxShadow: ' rgb(125 128 125) 1px 1px 18px 4px', width: '400px', height: '450px', backgroundColor: 'white', marginLeft: '34%', marginTop: '4%' }}>

                <img src={mainLogo} alt="logo" style={{ width: '135px', height: '100px', position: 'absolute', marginTop: '2%', marginLeft: '11%' }} />
            </div>

            <form onSubmit={submitHandler} autoComplete="off" style={{ marginTop: '-23%', marginLeft: '42%', fontSize: '26px' }}>

                <div>
                    <input type="text" name='firstName' placeholder='FirstName' onChange={changeHandler} required />
                </div>

                <div>
                    <input type="text" name='lastName' placeholder='LastName' onChange={changeHandler} required />
                </div>

                <div>
                    <input type="email" name='email' placeholder='Enter email' onChange={changeHandler} required />
                </div>
                <div>

                    <input type="password" name='pass' placeholder='Enter password' onChange={changeHandler} required />
                </div>
                <div>

                    <input type="text" name='mobileNum' placeholder='Enter mobileNum' onChange={changeHandler} required />
                </div>
                <div>

                    <input type="text" name='skills' placeholder='Enter your technical skills' onChange={changeHandler} required />
                </div>
                <input type='submit' value='Register' style={{ marginLeft: '53px' }} />
            </form>
            <p style={{ marginLeft: '40%', marginTop: '2%' }}>Already have an account? <Link to="/login">Login</Link></p>

        </div>
    )
}
export default Register;