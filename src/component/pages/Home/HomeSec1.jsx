/* eslint-disable no-unused-vars */
import React from 'react'

export const HomeSec1 = () => {
  return (
    <section id='root-home-section1'>
      <div className='HomeSectionPart1'>
        <div className='container'>
          <div className='Home-Part'>
            <div className='paddingcontainer'>

                <div className='HomepartConatnt'>


            {/* LEft Part To satrt --website--Gurdian Its*/}

            <div className='home-left-gurdiance-it-bio display-flex'>
                <div className='home-left-gurdiance-it-bio-container'>
                  <div className='home-left-gurdiance-it-bio-conatnt'>

                    <div className='home-left-gurdiance-it-bio-span-info'>
                      <span>Gurdiance It</span>
                    </div>

                    <div className='home-left-gurdiance-it-bio_tittle'>
              
                        <h1>We Help Convert Your Ideas Into Real-Time Freelancing & Best Support And Futuristic Solutions.</h1>
             
                    </div>

                    <div className='home-left-gurdiance-it-bio-span-info-middle'>

                      <span>Welcome to FnSoftwares Digital Agency! We specialize in helping businesses like yours succeed online. From website design and development to digital marketing and advertising.</span> 

                     </div>

                     <div className='home-left-gurdiance-it-bio-span-info-middle-btn-group'>
                      asd
                     </div>
                  </div>
                </div>
            </div>
            {/* LEft Part To satrt --website--Gurdian Its*/}

           <div className='allmodel'>
              {/* 3d Model Cube Dev */}

                  {/* <div className='dbgModel1'>
                      <div className='Cube1'>
                        <div>
                          <span className='i--0'></span>
                          <span className='i--1'></span>
                          <span className='i--2'></span>
                          <span className='i--3'></span>
         
                        </div>
                      </div>
                  </div> */}
              {/* 3d Model Cube Dev */}

                    {/* Plan Animiation start HEre PAsete COde*/}

                    {/* Plan Animiation start */}



                  {/* Course Detals Contant Animation Div */}

                  <div className='CourseDitalsAnimationBorder'>
                  <div ref={CourseDiv} className='CouseDitalsConatiner'>
             

                      <div className='ConatntCourse'>

                          {
                            services && services.map((el , index) =>{
                              return (
                                <div key={index} className='CourseItemCard'>


                      {/* Coming Course Ditals */}
                      <div className={`ConatntCourseComingEvent ${toggle}` }>
                        
                      </div>

                      <div className={`ConatntCourseComingEvent2 ${toggle2}`}>
                        
                        </div>
                      {/* Coming Course Ditals */}




                                <div className='CourseCardTittle'>
                                  <h4>Offer <span>40%</span></h4>
                                </div>

                                <div className='CourseIcons'>
                                    {
                                      el.tittle
                                    }
                                </div>

                                <div className='CourseBtnGroup'>
                                  <div className='Coursebtn'>
                                    <button> <span></span> In Roll Now</button>
                                  </div>
                                </div>
                          </div>
                              )
                            })
                          }


                        
                    </div>
                  </div>

                  </div>
                  {/* Course Detals Contant Animation Div */}

                  {/* Offer Div Start */}

                  <div className='OfferContainner'>
                    <div className='OfferContant'>

                      <div className='OfferAnimationContant'>
                        
                      </div>


                  {/* width animation warless  */}
                      <div className='LEftAnimationWidth'>
                        <div className='LEftAnimationWidthContant'>


                            <div className='LeftAnimationWidth2'>

                              <div className='LeftAnimationWidth2Container'>
                                    <div className='LeftAnimationWidth3'>

                                      <div className='LeftAnimationWidth3Container'>
                                        <div className='LeftAnimationWidth4'>

                                        </div>
                                      </div>
                                    </div>
                              </div>

                            </div>


                        </div>
                      </div>
                      {/* width animation warless  */}
                    </div>
                  </div>
                  {/* Offer Div Start */}

              {/* Animatipon part Start Tjhis is start */}

                <div className='EarthModelPart'>
                    <div className='EarthModelContainer'>
                        {/* model eearth coursescuircle */}
                        <div className='CourseEarthModelRound1'>
                          <div className='CourseEarthContant'>

                          </div>
                        </div>

                        <div className='CourseEarthModelRound2'>
                          <div className='CourseEarthContant'>

                          </div>
                        </div>

                        
                        <div className='CourseEarthModelRound3'>
                          <div className='CourseEarthContant'>

                          </div>
                        </div>

                        <div className='CourseEarthModelRound4'>
                          <div className='CourseEarthContant'>

                          </div>
                        </div>





                        {/* model eearth coursescuircle */}

                    </div>
                </div>


              {/* Animatipon part Start This is end */}


                   <div className='HomeFastSection'>           
                  <div className='HomeFastSectionConatiner'>

                    <div className='HomeFastLeftSection'>           
                    </div>


                  </div>
                  </div>
                </div>

                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
