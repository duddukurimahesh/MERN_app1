import React from 'react'
import { Link } from 'react-router-dom';


const Home = () => {

    return (

        <div style={{ backgroundColor: '#0b99a5', height: '100px', marginTop: '-23px' }}>

            <nav>
                <div style={{ width: '100%', height: '100px', backgroundColor: '#0b99a5', marginTop: '-20px' }}>

                    <div style={{ backgroundColor: 'tamota', textAlign: 'cente', lineHeight: '93px', width: '270px', height: '100px' }}>
                        <h1 style={{ color: 'white', fontSize: '28px', marginLeft: '10px', fontFamily: "sans-serif" }}><button><a href="http://localhost:3000/">Go to HomePage</a></button></h1>
                    </div>

                    <div style={{ marginLeft: "80%", lineHeight: '82px', marginTop: '-120px', fontSize: '13px' }}>
                        <h1 style={{ marginTop: '30px', height: '77px', width: '74px', textAlign: 'center', }}> <button><Link to="/register">Register</Link></button></h1>
                    </div>

                    <div style={{ marginLeft: "90%", lineHeight: '197px', marginTop: '-164px', fontSize: '13px' }}>

                        <h1 style={{ marginTop: '30px', height: '77px', width: '74px', textAlign: 'center' }} > <button> <Link to="/login">login</Link></button></h1>
                    </div>

                </div>

                <div>
                    <h1 style={{ fontSize: '50px', textAlign: 'center', padding: '14px', borderRadius: '169px', letterSpacing: '1px', boxShadow: 'rgb(162 208 218) 10px 10px 60px 130px', width: '747px', height: '45px', backgroundColor: 'rgb(162 208 218)', marginLeft: '21%', marginTop: '14%', lineHeight: '45px' }}>Welcome to Freelancer world!</h1>
                </div>
            </nav>
        </div>

    )
}
export default Home;