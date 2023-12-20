/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Regestation = () => {
  return (
    <div className='' id='root--regestation'>
        <div className='account-login-user-section xl-2 xl--a'>
            <div className='container login-authentication-xl-2'>
                <div className='login-account-part xl-45-xl'>
                    <div className='paddingcontainer xl-4-xl'>
                        <div className='login-account-container'>
                            <div className='login-account-contant xl-4-x4'>
                                
                                <div className='regestation-authentication-div xl-4-0-x-0'>
                                    <div className='login-authentication-container xl-2-34'>
                                        <div className='login-authentication-contant'>

                                            <div className='login-authentication-header'>
                                                <div className='login-authentication-header-tittle'>
                                                    <h3>Guidance <span>It</span> Regestation</h3>
                                                </div>
                                            </div>

                                            <div className='login-authentication-login-middle-dev xl-324-xl-34'>
                                                <div className='login-authentication-login-dev'>
                                                    <input type='text' placeholder='Please Enter Your Name' />
                                                </div>

                                                <div className='login-authentication-login-dev'>
                                                    <input type='email' placeholder='Please Enter Your Email' />
                                                </div>

                                                <div className='login-authentication-login-dev'>
                                                    <input type='phone' placeholder='Please Enter Your Phone Number' />
                                                </div>

                                                <div className='login-authentication-login-dev'>
                                                    <input type='text' placeholder='Please Enter Your Email' />
                                                </div>

                                                <div className='login-authentication-login-dev'>
                                                    <input type='password' placeholder=' Your Refferal Code (optional)' />
                                                </div>


                                                <div className='login-authentication-login-dev'>
                                                    <input type='password' placeholder='Create a Password like @sd-.' />
                                                </div>

                                                <div className='login-authentication-login-dev'>
                                                    <button>Regstation</button>
                                                </div>

                                                <div className='ex-change-page'>
                                                    <Link to={'/account/login'}>Alrady Have Account</Link>
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

export default Regestation
