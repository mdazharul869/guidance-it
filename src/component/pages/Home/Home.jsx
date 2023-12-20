/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { FcManager } from "react-icons/fc";
import { TbUsersGroup } from "react-icons/tb";
import './Home.scss';
import supportclass from "./image/Online-live-Class-1.png";
import aboutme from "./image/aboutme.jpg";
import signiture from "./image/signiture.png";

import Footer from '../../layout/Footer/FooterMobailMenu/Footer';
import AboutHero from './AboutHero/AboutHero';

import MostPopularCourse from './MostPopularCourse/MostPopularCourse';



const Home = () => {


   // Replace with your actual selector


   useEffect(()=>{
    const images = document.querySelectorAll('.img-dev-bacground-img');

    function toggleOpacity(index) {
      images.forEach((image, i) => {
        image.style.opacity = i === index ? '1' : '0';
      });
    }

    function cycleOpacity(index) {
      toggleOpacity(index);
    
      setTimeout(() => {
        const nextIndex = (index + 1) %images.length;
        cycleOpacity(nextIndex);
      }, 4000);
    }

    // Start the cycle
cycleOpacity(0);

   },[])





  window.addEventListener("load" , e =>{
  //  addClassWithDelay()

  })

  const cl = {
    width:"100%",
   // backgroundColor:"red",
    height:"80vh"
  }


  const service = [
    {
      tittle : "Web Devolopment"
    },
    {
      tittle : "Degital Marketing"
    },
    {
      tittle : "Computer Course"
    },
    {
      tittle : "Grapics Disaign"
    },
    {
      tittle : "Video Editing"
    },
    {
      tittle : "Game Devolopment"
    }

    
  ]

  const services = [
    {
      tittle : "Web Devolopment"
    },
    {
      tittle : "Degital Marketing"
    },
    {
      tittle : "Computer Course"
    },
    {
      tittle : "Grapics Disaign"
    },


    
  ]
const livesuport = {
  support : ` ১. কাজ ভালো শিখতে পারলে প্রজেক্ট কাজ / প্রজেক্ট প্রদান  এবং ওয়ার্কার হিসেবে কাজের সুযোগ ।
  ২. রিয়েল ওয়ার্ল্ড প্রজেক্টে ডিস্কাউন্টে ১/২/৩ মাসের ইন্টার্নশিপ (সেই সময় যা ফি থাকবে সেটির ৫০%)
  ৩. ফাইভার, আপওয়ার্ক, ফ্রিল্যান্সার প্রোফাইল ১০০% ভেরিফাই সাপোর্ট ।
  `
}

const sudentdatacard = [
  {
    studentcount : "35000+",
    totalstudent : "Total Student",
    infotext : "in 3 years"
  },
  {
    studentcount : "7500+",
    totalstudent : "Current Student",
    infotext : "we carrent student"

  },
  {
    studentcount : "20000+",
    totalstudent : "Certified",
    infotext : "Alrady Certified"
  },
  {
    studentcount : "18000+",
    totalstudent : "We made Freelancer",
    infotext : "current doing freelancing"
  }
]

const studentdataimage = [
  {
    image : aboutme
  },
  {
    image : aboutme
  }
]

  return (
  
    <div id='home'>
     {/* //fast Home part One start----------md------azharul--------devoloper------- */}

    {/* //fast Home part One end----------md------azharul--------devoloper------- */}

    <section id='root-sectionHeader' className='Section1' >
      <div className='sectionheaderpart section-1 lvnx-4-sda'>
        <div className='container sec-tionheader-container'>
          <div className='homepart1-start home-part-header'>
            
            <div className='home-part-contant-bacground background-contant' >
              <div className='home-part-item1 home-part-backgound-img-left' style={cl}>
                    <div className='img-dev-bacground-img guidenceit-1'>        
                    </div>

                    <div className='img-dev-bacground-img guidenceit-2'>        
                    </div>

                    <div className='img-dev-bacground-img guidenceit-3'>        
                    </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 
    
    {/* fast Home part 2nd About start----------md------azharul--------devoloper------- */}

    <section id='root-home-section2'>
      <div className='HomeAboutSection'>
        <div className='container'>
          <div className='HomeSectionPart'>
            <div className='paddingcontainer'>

              <div className='HomeAboutContants'>
                <div className='HomeAboutContainer'>

                    <div className='HomeAboutLeftSection'>
                      <div className='HomeAboutLeftContainer'>
                          <div className='HomeAboutContant'>
                            <div className='HomeAboutLeftImageDiv'>
                                  <img src={aboutme} alt='' />
                            </div>
                          </div>
                      </div>
                    </div>


                    <div className='HomeAboutRightSection'>
                      <div className='HomeRightContant'>
                        <div className='HomeRightInfoSection'>

                            <div className='HomeAboutSectionTopTitleSpan'>
                              <div className=''></div>
                              <span>about <p>company</p></span>
                            </div>

                            <div className='HomeRightTitleMain'>
                              <div className=''>
                                 <h2>What We Promise High <span>    Quality IT Solutions <p>?</p></span>  </h2>
                              </div>
                             
                        
                            </div>

                            <div className='HomeRightInfoText'>
                              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magnam, velit ratione reprehenderit vel placeat quaerat recusandae aspernatur quae ipsum voluptatibus, in quod natus pariatur odit. Ad temporibus, ullam hic, nemo distinctio debitis dolorum laboriosam delectus aspernatur, unde repellat! Velit illo voluptate nihil corrupti.</span>
                            </div>

                            <div className='HomeRightExparianceTextContainer'>
                                  <div className='TimgingAndExparicane'>
                                  <div className='TimeingImageDev'>
                                  <img src="https://w7.pngwing.com/pngs/995/102/png-transparent-man-working-in-front-of-boss-artwork-business-time-management-time-management-overtime-overtime-stay-up-to-time-management-furniture-human-resource-management-service.png" alt='' />
                              </div>

                              <div className='Text-tittle'>
                                <div className='TittleTExt'>
                                  <h1>08+<span>Years</span></h1>
                                </div>

                                <div className='ExperianceItem'>
                                  <h3>Experiance is online Taching</h3>
                                </div>
                              </div>
                                  </div>

                              <div className='SingnitureConatiner'>
                                <div className='Signature'>
                                  <img src={signiture} alt='' />
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
    </section>
    {/* //fast Home part 2nd About end----------md------azharul--------devoloper------- */}

    
    {/* supoort or live class section ---opart */}
    <section id='root-home-section3'>
      <div className='liveclass-section'>
        <div className='container'>
          <div className='liveclass-support-part'>
            <div className='paddingcontainer'>
              <div className='liveclass-support-contents'>
                <div className='liveclass-support-contant'>

                    <div className='liveclass-support-items'>

                          <div className='liveclass-support-item-header'>
                            <div className='liveclass-support-item-header-tittle xl-354'>
                              <h3>Gurdiance <span className='it-color-live-suppport'>It</span> দেশের সেরা ফ্রিলানসিং প্রতিষ্ঠান</h3>
                            </div>
                          </div>

                          <div className='liveclass-support-item-end-end'>

                            <div className='liveclass-support-item-end-end-part-1'>
                              <div className='liveclass-support-item-end-end-part-1container'>
                                  <div className='contant-live-supports-info-tex'>
                                    <span>{livesuport.support}</span>
                                  </div>
                              </div>
                            </div>

                            <div className='liveclass-support-item-end-end-part-2-imagepart'>
                              <div className='liveclass-support-item-end-end-image-conmtainer'>
                                  <img src={supportclass} alt='' />
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
    </section>
    {/* supoort or live class section ---opart */}

    {/* our student [part start] */}
    <section id='roote-home-section-4'>
      <div className='our-student-section'>
        <div className='container'>
          <div className='our-student-part'>
            <div className='paddingcontainer'>
              <div className='our-student-contants xl-34-xl3'>
                <div className='our-student-items'>
                    
                    <div className='our-stident-part-1-left'>
                      <div className='our-student-part-left-container'>
                        <div className='our-student-part-left-contant'>
                        <div  className='our-student-part-left-image'>
                            {
                              studentdataimage && studentdataimage.map((el, index)=>{
                                return(          
                                  <img key={index} src={el.image} alt='' />
                              
                                )
                              })
                            }  
                            
                            </div>


                        </div>
                      </div>
                    </div>


                    <div className='our-stident-part-2-right'>
                      <div className='our-stident-part-2-container'>
                          <div className='our-stident-part-2-conatnt'>

                            <div className='our-stident-part-2-item-part-1'>

                              {
                                sudentdatacard && sudentdatacard.map((el, index) =>{
                                  return(
                                    <div key={index} className='our-student-data-card'>
                                    <div className='our-student-Total-count'>
                                      <h2>{el.studentcount}</h2>
                                    </div>
    
                                    <div className='totoal-student-ifo-text'>
                                      <span>{el.totalstudent}</span>
                                    </div>
    
                                    <div className='year-count'>
                                      <span>{el.infotext}</span>
                                    </div>
                                  </div>
                                  )
                                })
                              }
               
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
    </section>
    {/* our student [part start] */}

    <section id='roo-home-service'>
      <div className='HomeServiceSection'>
        <div className='container'>
          <div className='HomeServicePart'>
            <div className='paddingcontainer'>
              <div className='HomeServiceContainer'>
                <div className='HomeServiceConatnt'>


                  <div className='HomeServiceHeaderpartSection'>
                    <div className='HomeServiceHeaderTittle'>

                        <div className='HomeServiceTittleSpan'>
                            <div className=''></div>
                            <span>Our <p>Services</p></span>
                        </div>


                      <div className='HomeServiceBtnAndTittle'>
                        <div className='MainServiceTittle'>
                          <h1>We Offer <span> a Wide <br/> Variety of IT Services</span></h1>
                        </div>

                        <div className='SeviceBtnContainer'>
                          <div className='ServiceBtn'>
                            <button>All Course</button>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className='HomeServiceMiddleOurServiceSection'>
                      <div className='HomeServiceCouseContainer'>
                          <div className='HomeServiceCourseContant'>

                              {
                                service && service.map((el , index)=> {
                                  return(
                                    <div key={index} className='HomeServiceItem'>
                                      
                                        <div className='CardItem'>
                                          <div className='TittleOFItems'>

                                              <div className='TittleIcons'>
                                                <i><FcManager /></i>
                                              </div>
                                              <div className='TittleSevice'>
                                                <h4>{el.tittle}</h4>
                                              </div>
                                          </div>


                                          <div className='SevicesAppInfoText'>
                                            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores odit ipsum dicta veritatis numquam nihil aliquid.</span>
                                          </div>
                                      </div>

                                    </div>
    
                                  )
                                })
                              }
                   
                            


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

    {/* About Image  */}

    <AboutHero />

    {/* derpertment */}
    <MostPopularCourse />

{/* fast chaptar 2nd end */}

   <section id='root---oursuccess'>
      <div className='OurSuccessection'>
          <div className='container'>
            <div className='OurparsonalExcellace'>
              <div className='paddingcontainer'>
                <div className='OurSuccessContainer'>

                  <div className='OurSuccessContant'>

                    <div className='OurSuccesConatanLeftSection'>
                      <div className='OurSuccsessContant'>

                        <div className='ourSuccessInTittleHeader'>
                              <div ></div>
                              <span>Hello <p>Master</p></span>
                        </div>

                        <div className='ourSuccessInMainTittle'>
                          <div className='OurSuccessTittle'>
                            <h1>Gurdiance <span>it</span> <br />Insight & Personal <br /> Excellence</h1>
                          </div>
                        </div>


                        <div className='OurSuccessInfotext'>
                          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span>
                        </div>

                        <div className='SuccessBtnFgroup'>
                          <div className='successBtn'>
                            <button>All Course</button>
                          </div>
                        </div>

                      </div>
                    </div>

            <div className='OurSuccesContanRightSection'>

                      <div className='ActivelarnerContainer'>
                        <div className='ActiveLarnerConatant'>
                          <div className='ActiveLarnerCard'>

                            <div className='PeopleInthis'>
                              <span><TbUsersGroup /></span>
                            </div>

                            <div className='TotalLarner'>
                              <h2>240</h2>

                              <div className='ActiveLarner'>
                                <span>Active Larners</span>
                              </div>
                            </div>
                          </div>


                        {/* mopdel parser */}
                            <div className='MoabilBorderContainer'>
                              <div className='MoabilContantborderModel'>

                                <div className='MiabailhandOfContant'>

                                </div>
                              </div>
                            </div>


                            {/* uper model parser Phone */}

                            
                            <div className='MiabailhandOfContantUper'>
                                  <div className='upeerHandContainer'>
                                    <div className='upperHand'>
                                      <div className='InhandUperContainer'>
                                        <div className='InHandUperContant'></div>
                                      </div>
                                    </div>
                                  </div>
                            </div>

                        </div>


                      </div>


                      <div className='LeanthOfUserBorder'>
                        <div className='LEanthOfuserVonatiner'></div>
                        
                      </div>

                      <div className='LeanthOfUserBorderWith'>
                        <div className='LEanthOfuserVonatinerWithHand'></div>
                        
                      </div>

                      <div className="OurMemberContainer">
                              <div className='OurMemberConatnt'>

                                <div className='OurMimberInCardIcons'>
                                  <span><FcManager /></span>
                                </div>

                                <div className='OurMimberInCardTittle'>
                                  <div className='TotalStudenr'>
                                    <h4>Total Student</h4>
                                    <span>45610</span>
                                  </div>
                                </div>

                                <div className='AllMEmberImgDevConatiner'>
                                  <div className='MemberImgcontant'>
                                    <img src={azharul} alt='' />
                                  </div>

                                  <div className='MemberImgcontant'>
                                    <img src={azharul} alt='' />
                                  </div>

                                  <div className='MemberImgcontant Mobail'>
                                    <img src={azharul} alt='' />
                                  </div>
                                  <div className=' MorePeopleicoins'>
                                   <span>+</span>
                                  </div>
            
                                </div>

                              </div>
                            </div>

                      <div className='MemberModel'>

                              <div className='MemberModelContainer'>
                                <div className='MemberModelMEmber'>
                              
                                </div>
                              </div>

                              
                              <div className='MemberModelContainer2'>
                                <div className='MemberModelMEmber2'>
                                    <div className='AnimationImageDev'>
                                        <img src={azharul} alt='' />
                                    </div>
                                </div>
                              </div>

                              <div className='MemberModelContainer3'>
                                <div className='MemberModelMEmber3'>
                              
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
   </section>


   {/* Footer------------ */}
   <Footer />
    
    </div>
   
  )
}

export default Home
