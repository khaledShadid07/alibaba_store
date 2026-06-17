import './SignIn.css'
import logo from '../assets/Alibaba-Logo.png'
import google from '../assets/google.png'
import facebook from '../assets/facebook.avif'
import linked from '../assets/linked.jpg'
import signin from '../assets/signin.avif'
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios';

const SignIn = () => {
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_URL|| 'https://alibaba-store-3.onrender.com'; 
  const [userdata, setuserdata] = useState({
    email: '',
    password: ''
  })

  return (
    <>
      <section>
        <Link to='/'><img style={{ width: '220px' }} src={logo} alt="logo" /></Link>
        
      </section>

      <main className='d-flex flex-wrap gap-4 mx-2'>

        <div className='flex-grow-1 signin-img '>

        </div>

        <div className='flex-grow-1 d-flex flex-column align-items-center'>
          <p className='sign-txt  fw-bold text-center'>Sign in</p>


          <form onSubmit={async (e) => {
            e.preventDefault();
            try {
              console.log('url:',URL);
              const res = await axios.post(`${URL}/users/login`,userdata);
              console.log(res.data)
              localStorage.setItem('token',res.data.token);
              alert('you login successufuly ')
              navigate('/')
            }

            catch(error){console.log(error)}


          }}>
            <p className=' sign-txt-2  fw-bold '>Sign in with a code</p>
            <input placeholder='Email address' className=' text-secondary form-sign rounded-2 border border-secondary p-1' value={userdata.email} onChange={(e) => setuserdata({ ...userdata, email: e.target.value })}/>
            <br />
            <br />
            <input placeholder='Password' className=' text-secondary form-sign rounded-2 border border-secondary p-1'  value={userdata.password} onChange={(e) => setuserdata({ ...userdata, password: e.target.value })}/>
            <p className=' sign-txt-2  fw-bold mt-2'> Forget password ?</p>

            <button className='signin-btn rounded-5 fw-bold'>Continue</button>

          </form>
          <p className='   fw-bold mt-4 text-secondary'> OR</p>
          <div className='d-flex align-items-center justify-content-between'>
               
               <img style={{width:'80px'}} src={google} alt='pic'  />
               <img style={{width:'90px'}} src={facebook} alt='pic'  />
               <img className='ms-3' style={{width:'45px'}} src={linked} alt='pic'  />

          </div>
          <p className='    mt-4 text-secondary'> New to Alibaba.com? <Link to='/SignUp'><span className='text-black span-signin'>Create an account</span> </Link> </p>
        </div>
        


      </main>
       <footer style={{backgroundColor:'rgb(238, 234, 234)'}} className='p-2 footer d-flex flex-column flex-wrap  align-content-center justify-content-center align-items-center mt-4 border-top'>
      <p className='text-secondary text-center mx-2'>AliExpress | 1688.com | Tmall Taobao World | Alipay | Lazada | Taobao Global | TAO| Trendyol| Europages</p>
      <p className='text-secondary text-center mx-2'>Policies and rules.Legal Notice.Product Listing Policy.Intellectual Property Protection.Privacy Policy.Terms of Use.Integrity Compliance</p>
      <p className='text-secondary text-center mx-2'>© 1999-2026 Alibaba.com。版权所有：杭州阿里巴巴海外信息技术有限公司 增值电信业务经营许可证：浙B2-20241358 Business license verification icon GSXT verification icon 浙公网安备33010002000366 浙ICP备2024067534号-3</p>

      </footer> 

    </>
  )
}

export default SignIn