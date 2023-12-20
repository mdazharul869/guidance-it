/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom"
import imag from '../image/aboutme.jpg'
const CoursesPage = () => {
    
  return (
    <div className='' id='root-course--page'>
      <div className='CourseSection'>
        <div className='container'>
            <div className='CoursePagepart'>
                <div className='paddingcontainer'>
                    <div className='CourseContant'>


                        <div className='CourseHeaderTittleSection'>
                            <div className='borderBottomYellow'></div>
                            <div className='CourseHeaderTittleConatnt'>
                                <h2>ফ্রিল্যান্সিং কোর্স</h2>
                            </div>
                        </div>


                        <div className='CourseMiddlepartAllCourseSection'>
                            <div className='CourseMiddleAllCourseContainer'>

                                <div className='CourseMiddleAllCourseContant'>

                                    <div className='CourseItem'>

                                        <Link to={"/courses/asds"} className='CourseItemConatnt'>
                                                <div className='CourseMiddleItemImage'>
                                                    <img src={imag} alt='' />
                                                </div>

                                                <div className='CourseMiddleTittle'>
                                                    <h3>Web Design ReactJs & Wordpress Website Development master Course</h3>
                                                </div>
                                        </Link>


                                    </div>

                                      <div className='CourseItem'>

                                        <Link className='CourseItemConatnt'>
                                                <div className='CourseMiddleItemImage'>
                                                    <img src={imag} alt='' />
                                                </div>

                                                <div className='CourseMiddleTittle'>
                                                    <h3>Web Design ReactJs & Wordpress Website Development master Course</h3>
                                                </div>
                                        </Link>


                                    </div>

                                    
                                      <div className='CourseItem'>

                                        <Link className='CourseItemConatnt'>
                                                <div className='CourseMiddleItemImage'>
                                                    <img src={imag} alt='' />
                                                </div>

                                                <div className='CourseMiddleTittle'>
                                                    <h3>Web Design ReactJs & Wordpress Website Development master Course</h3>
                                                </div>
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

export default CoursesPage
