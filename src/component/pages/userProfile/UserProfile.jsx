/* eslint-disable no-unused-vars */
import React from 'react';
import { AiOutlineFundView, AiTwotoneLike } from "react-icons/ai";
import { LuBookUp2, LuStar } from "react-icons/lu";
import { MdLibraryBooks } from "react-icons/md";
import { PiFolderSimpleStar } from "react-icons/pi";
import { TbUsersPlus } from "react-icons/tb";
import { Link } from "react-router-dom";
import azharul from '../Home/image/azharul.png';

export const UserProfile = () => {
  return (
    <div id='root--userprofile'>
        <div className='user-profile-section'>
            <div className='container'>
                <div className='user-profile-part'>
                    <div className='paddingcontainer'>
                        <div className='user-profile-container'>

                            <div className='user-profile-contant'>

                                <div className='user-profile-left-part'>
                                    <div className='user-profile-left-container'>

                                        <div className='user-profile-left-contant'>

                                            <div className='user-profile-header-profile-image'>
                                                <img src={azharul} alt='' />
                                            </div>

                                            <div className='user-profile-header-middle-info-container'>
                                                <div className='userprofile-middle-name-bio'>
                                                    <h2>Md Azharul</h2>
                                                    <span>Freelancer</span>
                                                </div>

                                                <div className='user-profile-middle-add-message0-Btn'>
                                                   <Link> <button className='AddFriend'>এড ফ্রেন্ড</button></Link>
                                                    <Link><button className='Message-btn-bg'>ম্যাসেজ</button></Link>
                                                </div>
                                            </div>

                                            <div className='user-profile-end-info-user'>

                                                <div className='icons-tittle-info'>
                                                    <i><AiOutlineFundView /></i>
                                                    <span>২ কোর্স</span>
                                                </div>

                                                <div className='icons-tittle-info'>
                                                    <i><TbUsersPlus /></i>
                                                    <span>৫১৬ স্টুডেন্টস</span>
                                                </div>

                                                <div className='icons-tittle-info'>
                                                    <i><AiTwotoneLike /></i>
                                                    <span>২৭ রিভিউ</span>
                                                </div>
                                                <div className='icons-tittle-info'>
                                                    <i className='user-profile-reivew-start'><LuStar  /></i>
                                                    <span>৪.০৭৪ এভারেজ রেটিং</span>
                                                </div>


                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className='user-profile-right-part'>
                                    <div className='user-profile-right-container'>
                                        
                                        <div className='user-profile-right-contant'>

                                            <div className='user-profile-ledt-contantsall'>

                                            <div className='user-profile-right-header-part'>
                                                <div className='user-profile-right-header-Tittle'>
                                                    <div className='user-profile-right-tittle-icons'>
                                                        <i><PiFolderSimpleStar /></i>
                                                        <h2>লেটেস্ট কোর্স</h2>
                                                    </div>

                                                    <div className='arodakun'>
                                                        <Link>আরও দেখুন</Link>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='user-right-header-middle-part'>
                                                <div className='user-contant'>
                                                    <h2>ড্যাটা আপডেটের কাজ চলছে...</h2>
                                                </div>
                                            </div>

                                            </div>


                                           <div className='user-profile-ledt-contantsall'>

                                            <div className='user-profile-right-header-part'>
                                                <div className='user-profile-right-header-Tittle'>
                                                    <div className='user-profile-right-tittle-icons'>
                                                        <i><MdLibraryBooks /></i>
                                                        <h2>বর্তমানে শিখছেন</h2>
                                                    </div>

                                                    <div className='arodakun'>
                                                        <Link>আরও দেখুন</Link>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='user-right-header-middle-part'>
                                                <div className='user-contant'>
                                                    <h2>ড্যাটা আপডেটের কাজ চলছে...</h2>
                                                </div>
                                            </div>
                                            
                                            </div>

                                          <div className='user-profile-ledt-contantsall'>

                                            <div className='user-profile-right-header-part'>
                                                <div className='user-profile-right-header-Tittle'>
                                                    <div className='user-profile-right-tittle-icons'>
                                                        <i><LuBookUp2 /></i>
                                                        <h2>ইতিমধ্যে শিখেছেন</h2>
                                                    </div>

                                                    <div className='arodakun'>
                                                        <Link>আরও দেখুন</Link>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='user-right-header-middle-part'>
                                                <div className='user-contant'>
                                                    <h2>ড্যাটা আপডেটের কাজ চলছে...</h2>
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
    </div>
  )
}
