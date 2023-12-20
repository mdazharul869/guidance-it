/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

export const SelectbachPage = () => {
  return (
    <div id='rooteSelectbach'>
        <div className='SelctbachSection'>
            <div className='container'>
                <div className='SelctBachPart'>
                    <div className='paddingcontainer'> 
                        <div className='SelctbachConatant'>


                        <div className='CourseHeaderTittleSection'>
                            <div className='borderBottomYellowSelctbach'></div>
                            <div className='CourseHeaderTittleConatnt'>
                                <h2>সিলেক্ট ব্যাচ</h2>
                            </div>
                        </div>

                        <div className='TheNameOfSelctbachContainer'>
                            <div className='TheNameOFConatnt'>
                                <span>Web Design Reactjs Wordpress Website Development</span>
                            </div>
                        </div>


                        <div className='SelctBachItemContainer'>

                            <div className='SelectybachitemContant'>

                                <div className='SelctBachItem'>

                                    <div className='SelctBachInfo'>
                                        <div className='SelectInfoFastPart'>
                                            <h4>ব্যাচ শুরু : <span> ২১ নভেম্বর ২০২৩</span></h4>   
                                            <h4>ভর্তি হয়েছেন : <span> 117 জন</span></h4>

                                            <h4>ভর্তি শেষ : <span className='VorteSes'> ২০ নভেম্বর ২০২৩</span></h4>
                                        </div>

                                 
                                        <div className='SelctinFoSecendpart'>
                                            <h4>ব্যাচ শেষ : <span> ৩০ এপ্রিল ২০২৪</span></h4>   
                                                <h4>স্ট্যাটাস : <span className='VorteColce'> ভর্তি চলছে </span></h4>

                                                <h4>ব্যাচ আইডি : <span className='Bachid'> 1693244722</span></h4>
                                        </div>

                                    </div>
                                
                                <div className='SelectBachBtngroup'>
                                    <Link >
                                    <button>  ভর্তি চলছে</button>
                                    </Link>
                                </div> 
                                </div>



                                     <div className='SelctBachItem'>

                                    <div className='SelctBachInfo'>
                                        <div className='SelectInfoFastPart'>
                                            <h4>ব্যাচ শুরু : <span> ২১ নভেম্বর ২০২৩</span></h4>   
                                            <h4>ভর্তি হয়েছেন : <span> 117 জন</span></h4>

                                            <h4>ভর্তি শেষ : <span className='VorteSes'> ২০ নভেম্বর ২০২৩</span></h4>
                                        </div>

                                 
                                        <div className='SelctinFoSecendpart'>
                                            <h4>ব্যাচ শেষ : <span> ৩০ এপ্রিল ২০২৪</span></h4>   
                                                <h4>স্ট্যাটাস : <span className='ClassColce'> ক্লাস চলছে</span></h4>

                                                <h4>ব্যাচ আইডি : <span className='Bachid'> 1693244722</span></h4>
                                        </div>

                                    </div>
                                
                                <div className='SelectBachBtngroup2'>
                                    <Link >
                                    <button className='SecendCourse'>  ক্লাস চলছে</button>
                                    </Link>
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
