import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

const Register = () => {

    const [data, setData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        pass: "",
        mobile:"",
        skills:""
    });
    const changeHandler = e => {
        setData({...data, [e.target.name]:e.target.value})
    };
    const submitHandler = e => {
        e.preventDefault();
        console.log('login data is: ', data);
        axios.post('http://localhost:5001/reg', data)
        .then(res=> {
                console.log('reg api res--: ',res);
        })
        .catch(err=>{
            console.log('login API error---',err);
        });
    }


    return (
        <div>
            
            <form onSubmit={submitHandler} autoComplete="off">
                <div>
                    <input type="text" name='firstName' placeholder='Enter FirstName' onChange={changeHandler} required/>
                </div>
                <div>
                    <input type="text" name='lastName' placeholder='Enter LastName' onChange={changeHandler} required/>
                </div>
                <div>
                    <input type="email" name='email' placeholder='Enter email' onChange={changeHandler} required/>
                </div>
                <div>
                <input type="password" name='pass' placeholder='Enter password' onChange={changeHandler} required/>
                </div>
                <div>
                <input type="text" name='mobileNum' placeholder='Enter mobileNum' onChange={changeHandler} required/>
                </div>
                <div>
                <input type="text" name='skills' placeholder='Enter your technical skills' onChange={changeHandler} required/>
                </div>
                <input type='submit' value='Register'/>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>

        </div>
    )
}
export default Register;