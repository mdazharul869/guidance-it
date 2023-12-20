/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='' id='root--login'>
        <div className='account-login-user-section xl-2 xl--a'>
            <div className='container login-authentication-xl-2'>
                <div className='login-account-part xl-45-xl'>
                    <div className='paddingcontainer xl-4-xl'>
                        <div className='login-account-container'>
                            <div className='login-account-contant xl-4-x4'>
                                
                                <div className='login-authentication-div xl-4-0-x-0'>
                                    <div className='login-authentication-container xl-2-34'>
                                        <div className='login-authentication-contant'>

                                            <div className='login-authentication-header'>
                                                <div className='login-authentication-header-tittle'>
                                                    <h3>Guidance <span>It</span> Login</h3>
                                                </div>
                                            </div>

                                            <div className='login-authentication-login-middle-dev xl-324-xl-34'>
                                                <div className='login-authentication-login-dev'>
                                                    <input type='email' placeholder='Please Enter Your Email' />
                                                </div>

                                                <div className='login-authentication-login-dev'>
                                                    <input type='password' placeholder='Please Enter Your Password' />
                                                </div>

                                                <div className='login-authentication-login-dev'>
                                                    <button>Login</button>
                                                </div>

                                                <div className='ex-change-page-login'>
                                                    <Link to={'/account/regestation'}>Create Account</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Login
