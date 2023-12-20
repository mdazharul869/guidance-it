/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BiSolidUserDetail } from "react-icons/bi";
import { BsArrowRightSquare } from "react-icons/bs";
import { MdAssignmentAdd } from "react-icons/md";
import { Link } from 'react-router-dom';
import img1 from "../image/aboutme.jpg";


export const BachIdDitalsPage = () => {


    const [opencariculam , setcariculamopen] = useState(false)

    const textabotcourse = {
text :`আপনাকে প্রথমে জানতে হবে আপনি কি শিখবেন এই কোর্সে এবং কেন শিখবেন ও এটি শিখে আয় উপার্জন কতটুক করা সম্ভব বা কোন কোম্পানি / বায়ার এর আন্ডারে কাজ করে আয় করা সম্ভব কিনা। 🧐

সেটি আগে জেনে নিন, কতদূর কি সম্ভব এই কোর্সের পরে।
Web Design ReactJS & Wordpress ইত্যাদি এগুলো আসলে কি?

ওয়েব বা ওয়েবসাইট ডিজাইন ও ডেভেলপমেন্ট, এই বাক্যটি হয়তো আমরা প্রায়ই শুনি বা দেখি। এটির মুল অর্থ হল ওয়েবসাইট তৈরি করা এবং সেটি অনলাইনে লাইভ প্রকাশ করাকে বুঝায়। একটি ওয়েবসাইট এর পাবলিশ বা সারা বিশ্বের যেকোনো জায়গা থেকে ভিজিট করা যাবে এমন অবস্থা হওয়া পর্যন্ত যে সকল কাজ করতে হয় আসলে সেগুলিই হল ওয়েব ডিজাইন এবং ডেভেলপমেন্ট।
ওয়েব ডিজাইন কে ফ্রন্ট-এন্ট ডিজাইন ও বলা হয়।

উদাহরণঃ ফেইসবুক, ইউটিউব। 

একটি ওয়েবসাইট তৈরি করতে দুটি ধাপ থাকে। একটি হল ওয়েবসাইট টির ভিজুয়াল বিষয় টি, যেটি আমরা ভিজিট করার সাথে সাথে দেখি স্ক্রিনে।
আরেকটি হল, ওয়েবসাইট কর্তৃপক্ষের এডমিন প্যানেল। যেখান থেকে ওয়েবসাইট টি মেইন্টেইন করা হয়।

যেমনঃ আপনি ফেইসবুকে কোন ভায়োলেন্স করলে আইডি এলার্ট আসে বা ডিজেবল হয়। এটি করেন ওয়েবসাইট কর্তৃপক্ষ তাদের এডমিন / ব্যাকএন্ড প্যানেল থেকে। "ফ্রন্ট-এন্ড এবং ব্যাকএন্ড" এগুলো প্রোগ্রামিং এর একেকটি টার্ম বলতে পারেন। সুতরাং ওয়েবসাইট এর ফ্রন্ট এন্ড এবং ব্যাক-এন্ড আর এই রিয়্যাক্ট জেএস, ওয়ার্ডপ্রেস ইত্যাদি ছাড়া হাজারও প্রোগ্রামিং এর ও ওয়েব এর ল্যাঙ্গুয়েজ আজকে রয়েছে কিন্তু সব তো আর ট্রেন্ডিং এ থাকবেনা। এখন  চলছে রিয়্যাক্ট জেএস এর যুগ।

বলতে গেলে রিয়্যাক্ট জেএস দিয়ে নেক্সটজেএস নামে আরেক ফ্রেমওয়ার্ক অলরেডি মার্কেট দখল করে নিয়েছে সেটিরও প্রচুর চাহিদা। সেটির আলাদা কোর্স রয়েছে আমার এই সাইটে। কিন্তু আপনার এই কোর্সের স্কিল গুলো না শেখা পর্যন্ত ওয়েবসাইটের ডিজাইন দুনিয়ার কোন নতুন লাইব্রেরি বা ফ্রেমওয়ার্ক বা টুলস ব্যবহার করা বা শেখা  সম্ভব নয়। নতুন ফ্রেমওয়ার্ক এবং লাইব্রেরি মানে ওয়েব ডিজাইনের নতুন নতুন পদ্ধতি। এগুলো তৈরিও হয় এই কোর্সের যে স্কিল গুলো আছে সেগুলো দিয়ে। সুতরাং ওয়েবের ডিজাইন দুনিয়ায় কাজ শিখতে গেলে এই স্কিল গুলো ছাড়া কোনোদিন সম্ভব নয়।

ফ্রন্ট-এন্ড => সামনের অংশ
ব্যাক-এন্ড => পেছনের অংশ বা কর্তৃপক্ষের ম্যানেজমেন্ট অংশ

একজন বায়ার বা একটি কোম্পানি তাদের ওয়েবসাইট তৈরি করতে এই দুই ধরনের স্কিল জানা ওয়ার্কার কে হায়ার করেন। কেউ যদি দুটোই জানেন তাহলে একজনকে দিয়েই সেটি অর্থ প্রদান করে করিয়ে নেন। আবার তাদের ইচ্ছে অনুযায়ী তারা ফ্রন্ট-এন্ড ডিজাইনার কে আলাদা করে হায়ার করেন এবং পরে ব্যাকএন্ড ডেভেলপার বা প্রোগ্রামার হায়ার করেন যাবতীয় ফাংশনালিটি বানানোর জন্য।

যেমন আপনি ছবি আপলোড দিয়ে বাটন প্রেস করলেন। ছবিটি গেলো কোথায়? ফেইসবুকের সার্ভার বা ড্যাটা সেন্টারে। আপনার বাটন ক্লিকের পরে বেকগ্রাউন্ডে প্রোগ্রামিং এক্সিকিউট বা রান হয় আর তখন ছবি টি আপলোডের কার্যক্রম শুরু হয়। আর এগুলো কিভাবে হবে কোন আইপি থেকে কোন আইপি তে যাবে এই সকল কিছু একজন ব্যাক-এন্ড ডেভেলপার প্রোগ্রামিং এর মাধ্যমে করে রাখেন।

ওয়েব ডেভেলপমেন্ট নিয়ে ধারণা শেষ।

তাহলে আপনি শিখছেন ওয়েব ডিজাইন বা ফ্রন্টএন্ড ডিজাইন। যেটাতে ব্যাকেন্ড নেই। কারন সেটার জন্য আলাদা কোর্স করতে হয়।
তাহলে এই ফ্রনএন্ড ডিজাইন শিখে আপনি মার্কেটপ্লেসে বা যেকোনো কোম্পানিতে একজন ওয়েব ডিজাইনার বা ফ্রন্ট-এন্ড ডিজাইনার হিসেবে জব করবেন।

এবার ভাবুন, দিন যত যায় লাখ লাখ প্রোডাক্ট তৈরি হয়, নতুন নতুন কোম্পানি, ব্যবসা প্রতিষ্ঠান সারা বিশ্বে চালু হতেই থাকে ২৪ ঘণ্টা। তাদের কি ওয়েবসাইট প্রয়োজন নেই? 🤨
অবশ্যই একটি কোম্পানির অন্তত একটি ওয়েবসাইট আজকের যুগে থাকাটাই প্রয়োজন।

তাহলে সেই ব্যক্তি বা কোম্পানি গুলো মার্কেটপ্লেসে এসে ওয়েবসাইট বানানোর জন্য ফ্রন্ট-এন্ড এবং ব্যাক-এন্ড ডেভেলপার খুঁজবে কিনা? আর এই কাজ আজীবন শেষ হওয়ার কোন সুযোগ রয়েছে? 🤨 বিশ্ব দিন দিন যত আপডেট হচ্ছে ওয়েবসাইট সংখ্যা বিলিয়ন ছাড়িয়ে যায়। কখন কখনো একটা সিঙ্গেল প্রডাক্টের জন্যও একটা সিঙ্গেল ওয়েবসাইট তৈরি করতে হয় সেটার অফার এবং মার্কেটিং বৃদ্ধির জন্য। তাহলে একটি প্রোডাক্ট নিয়ে যদি ওয়েবসাইট তৈরি হচ্ছে আজকের এই যুগে, কত বিলিয়ন প্রোডাক্ট থাকতে পারে এই বিশ্বে এবং কতগুলো নতুন প্রতিনিয়ত তৈরি হচ্ছে? 😳

আশা করি বুঝে নিয়েছেন যে এই স্কিল টি গ্রহণ করে আপনি আজীবন কাজ করে যেতে পারবেন। আর মার্কেটে এই স্কিল জানা ব্যক্তিদের কতটা প্রয়োজন ইতিমধ্যেই বুঝেছেন তো রাইট? 😁

মনে রাখবেন, ওয়েবসাইট তৈরি না হলে সেটির জন্য কেউ খামাখা ডিজিটাল মার্কেটার খুজবেনা, তাই নয় কি? ওয়েবসাইট তৈরি না হলে সেটির লোগো বা মনোগ্রাম ডিজাইনের জন্য গ্রাফিক ডিজাইনার কোন কোম্পানি খুব একটা খুজবেনা, তবে এই নয় যে ওয়েবসাইট ছাড়া মার্কেটিং আর গ্রাফিক্স এগুলো ব্যক্তিরা কাজ করনা। অনেক কোম্পানি  বা ব্যক্তি রয়েছে যারা কিনা ওয়েবসাইট তৈরিই করেনা, শুধু ফেইসবুক পেইজ খুলে কোম্পানির মার্কেটীং চালায়। চলবেনা ? তো তাদের মার্কেটিং আজকের ডিজিটাল মার্কেটার রা করে দিচ্ছেন। 

কিন্তু আজকের যুগে, আপনি ভাবুন তো নতুন কোন কিছুর জন্য একটি ওয়েবসাইট একজন মালিক করবেই করবে এবং ওয়েবসাইট বানানো হলে শুরু করেন ডিজিটাল মার্কেটিং।

সুতরাং, একটা বড় অংশ জুড়ে ওয়েব ডিজাইন এবং ডেভেলপার এর উপর এবং নতুন ওয়েবসাইট তৈরির অর্ডারের উপর নির্ভর করে একজন গ্রাফিক ডিজাইনার বা ডিজিটাল মার্কেটারের কাজ পাওয়া বা করার নিশ্চয়তা।

তবে এটিকে ছোটো করে দেখার কোন সুযোগ নেই মামা । আপনাকে যেমন বায়ার একবার হায়ার করে হয়তো ৬ মাস বা বছরে ওয়েবসাইট টির মেইন্টেইন বা কিছু সমস্যা হলে ঠিক করার জন্য আবার টাকা দিয়ে হায়ার করবেন। তার থেকে বেশি দীর্ঘ সময় তার সাথে কাজ করবেন আপনার ডিজিটাল মার্কেটার দোস্ত। কারণ ? কারণ মার্কেটিং একদিনে হয়না রে পাগলা। 😎

মানে হল প্রত্যেকটি স্কিলের চাহিদা একটির সাথে আরেকটির কানেকশন রয়েছে এবং কোন স্কিলের ফ্রিল্যান্সার বা ওয়ার্কার আজ বসে থাকেনা ভবিষ্যতেও থাকবেনা। নতুন ওয়েবসাইট মানে নতুন একজন মার্কেটার লাগবে নতুন একজন গ্রাফিক ডিজাইনার লাগবে নতুন একজন এস ই ও ওয়ার্কার লাগবে নতুন একজন সেলস হিসাব রক্ষক লাগবে, প্রোডাক্ট আপলোড, অর্ডার গ্রহণ ইত্যাদি সকল ওয়ার্কার লাগবেই লাগবে আর এগুলো প্রতিদিন বাড়ছে নাকি কমছে?

ওয়েল, স্যার আপনি বুঝে গেছেন কি শিখতে এসেছেন এবং এটার পরে কি করা সম্ভব😉

একটি সামান্য ওয়েবসাইট ৮-১০ পেইজের হলে সেটার ডিজাইন করতে নেয়া হয় ২০০-৫০০-৭০০ ডলার পর্যন্ত। তো আপনি একটি কাজ পেলে কি হবে? 😮 বুঝেন তো রাইট? বা আপনি যদি ফ্রন্ট-এন্ড , ব্যাক-এন্ড দুটোই পারেন তাহলে পুরো প্রজেক্টের টাকাটাই আপনি পাবেন ৫০০-৫০০০ ডলার বা তারও বেশি ঠিক নেই, চাহিদা অনুযায়ী। এরপরে প্রশ্ন করবেন যে কত টাকা মাসে ইনকাম হবে? 🤨 নেভার। 

সুতরাং,
এই কোর্সটিতে যা কিছু রয়েছে সকল স্কিল গুলো ভালো ভাবে শিখতে পারলে মার্কেটপ্লেসে যে কেউই মাসে মিনিমাম ১০০ ডলার থেকে ১০০০  ডলার পর্যন্ত আয় করতে পারবেন। এখানে আলোচনা করা হয়েছে ফুল ওয়েব ডিজাইন এবং ফুল রিয়্যাক্ট জেএস ( বর্তমান ট্রেন্ডিং এবং ডিমান্ডিং ওয়েব টেকনোলজি ) সাথে থাকছে সি এস এস এর বিভিন্ন ফ্রেমওয়ার্ক নিয়ে ক্লাস। এক কোথায় আপনাকে ফ্রিল্যান্সিং শুরু করার জন্য যতটুক একদম শিখতেই হবে সেটা তো শেখানো হবেই তার থেকেও এক্সট্রা অনেক কিছুই এই ব্যাচে রয়েছে।

এর পরে আপনি চাইলে ফ্রিল্যান্সার নাসিম থেকেই ব্যাক-এন্ড টিও শিখতে পারেন 🧑‍💻 ।  এতে করে উপার্জন ও বাড়বে সাথে কাজ পাওয়ার সম্ভাবনাও বেশি থাকবে। স্কিল যত বেশি বেশি হবে তত আপনি প্রজেক্ট পাবেন। 

কোর্সের রুটিন এবং কাদের জন্য এই কোর্স তা নিচে উল্লেখ করা হয়েছে।

দয়া করে সকল তথ্য ঠিকমত না পড়ে ম্যাসেজ দিয়ে বিরক্ত করবেন না।  `
      
    }

    const bachService = [

        {
            name : "কারিকুলাম",
            infotext : "৫৪৬ টি",
            icons : <MdAssignmentAdd />
        },
        {
            name : "ভর্তির শেষ",
            infotext : "২০ নভেম্বর ২০২৩",
            icons : <MdAssignmentAdd />
        }
        ,
        {
            name : "ক্লাস শুরু",
            infotext : " ২১ নভেম্বর ২০২৩",
            icons : <MdAssignmentAdd />
        }
        ,
        {
            name : "কোর্স শেষ",
            infotext : "৩০ এপ্রিল ২০২৪",
            icons : <MdAssignmentAdd />
        }
        ,
        {
            name : "সময়সীমা",
            infotext : "৫ থেকে ৬ মাস",
            icons : <MdAssignmentAdd />
        }
        ,
        {
            name : "ভর্তি হয়েছেন",
            infotext : "১১৭ জন স্টুডেন্ট",
            icons : <MdAssignmentAdd />
        }
        
    ]

    const studentservice = [

        {
            service : "=> প্রতিটি ক্লাসের পরে ভিডিও রেকর্ড ।"
        },

        {
            service : "=> ওয়েব ডিজাইন সম্পর্কিত বিভিন্ন টুলস ।"
        },
        {
            service : "=> কাজ ভালো শিখতে পারলে প্রজেক্ট কাজ / প্রজেক্ট প্রদান  এবং ওয়ার্কার হিসেবে কাজের সুযোগ ।"
        },
        {
            service : "=> রিয়েল ওয়ার্ল্ড প্রজেক্টে ডিস্কাউন্টে ১/২/৩ মাসের ইন্টার্নশিপ (সেই সময় যা ফি থাকবে সেটির ৫০%)"
        },
        {
            service : "=> ফাইভার, আপওয়ার্ক, ফ্রিল্যান্সার প্রোফাইল ১০০% ভেরিফাই সাপোর্ট ।"
        },
        {
            service : "=> ফাইভার, আপওয়ার্ক, ফ্রিল্যান্সার প্রোফাইল ১০০% ভেরিফাই সাপোর্ট ।"
        },
        {
            service : "=> বায়ারের কাজ করতে গিয়ে সমস্যা হলে সাপোর্ট ইত্যাদি  ।"
        },

    ]

    const cariculam = [
        {
            name : 'What is Marketing'
        },
        {
            name : 'What is Digital Marketing'
        },
        {
            name : 'Facebook Marketing'
        },
        {
            name : 'Youtube Marketing & Management'
        },
        {
            name : 'LinkedIn Marketing & Management'
        },

        {
            name : 'Twitter Marketing & Management'
        },
        {
            name : 'What is onPage SEO '
        },

        {
            name : 'What is offPage SEO '
        },

        {
            name : 'What is Keyword Research '
        },
        {
            name : 'Keyword Research Process '
        },

        {
            name : 'CPA Marketing '
        },
        {
            name : 'Google Adsense & How to Earn '
        },


        
 
    ]



  return (
    <div id='root--bachidpage'>
      <div className='BachidDitalsSection'>
        <div className='container'>
            <div className='CourseDitalsPart'>
                <div className='paddingcontainer'>
                    <div className='CourseDitalsPageContants'>

                        <div className='CourseDitalsPageContant'>

                            <div className='CourseDitalspageLeftPart'>
                                
                                <div className='CourseDitalspageLeftContainer'>

                                    <div className='CourseDitalspageLeftContant'>

                                        <div className='CourseDitalsDev'>
                                            <div className='CourseDitalsDevContant'>

                                                <div className='CourseDitalsimageDiv'>
                                                    <img src={img1} alt='' />
                                                </div>

                                                <div className='CourseDitalsDevTittle'>
                                                    <h3>Web Design, ReactJS & Wordpress Website Development Master Course</h3>
                                                </div>
                                            </div>
                                        </div>


                                        <div className='CourseDitalspart2'>
                                            <div className='CourseDitalspart2Container'>
                                                <div className='CourseDitalsapart2Contant'>

                                                <div className='CourseDitalspar2Tittle'>
                                                                <div className='CourseDitalspart2TittleIcon'> <i> <BiSolidUserDetail /></i>
                                                                <h4 >টিউটোর</h4>
                                                                </div>
    
                                                                <div className='CourseDitalspart2InfoText'>
                                                                    <Link to={"/user/25654"}>
                                                                    <h4 className='NameToturial'>Md Azharul</h4>
                                                                    </Link>
                                                          
                                                                </div>
    
                                                              
                                                        </div>
                                                    {
                                                        bachService && bachService.map((el, index) =>{
                                                            return(


                                                                <div key={index} className='CourseDitalspar2Tittle'>
                                                                <div className='CourseDitalspart2TittleIcon'> <i><MdAssignmentAdd /></i>
                                                                <h4>{el.name}</h4>
                                                                </div>
    
                                                                <div className='CourseDitalspart2InfoText'>
                                                                    <h4>{el.infotext}</h4>
                                                                </div>
    
                                                              
                                                                </div>
    
    
                                                            )
                                                        })
                                                    }

                                                        <div className=' lastCriculam'>
                                                                <div className='CourseDitalspart2TittleIcon'> <i><MdAssignmentAdd /></i>
                                                                <h4>ব্যাচ আইডি</h4>
                                                                </div>
    
                                                                <div className='CourseDitalspart2InfoText '>
                                                                    <h4 className='BachIdLAstCrariculam'>1693244722</h4>
                                                                </div>
    
                                                              
                                                                </div>
    


                                                </div>
                                            </div>
                                        </div>


                                        <div className='CourseDitalspart3'>
                                            <div className='CourseDitalspart3Container'>

                                                <div className='CourseDitalspart3Contant'>
                                                 <div className='CourseDitalsoart3HeaderTittle'>
                                                    <h3>স্টডেন্ট যা পাবে</h3>
                                                 </div>

                                                 <div className='CourseDiatlspart3MiddleContant'>

                                                    {
                                                        studentservice && studentservice.map((el, index) =>{
                                                            return(
                                                                <span key={index}> {el.service} </span>

                                                            )
                                                        })
                                                    }
                          
                                                
                                                 </div>
                                                </div>

                                            </div>
                                        </div>


                                        <div className='CourseDitalspart4'>
                                            <div className='CourseDitalsoart4Container'>
                                                <div className='CourseDitalspart4Contant'>
                                                    
                                                    <div className='CourseDitalspart4Header'>


                                                        <div 
                                                        className='CourseDitalspart4Tittle'>
                                                            <div className='CourseTiditalspart4IconsTittle'><i><MdAssignmentAdd /></i>
                                                             <h4>রেগুলার মূল্য</h4>
                                                            </div>

                                                            <div className='CourseDitalspart4ContantInfo'><span>৳১৫০০০ টাকা</span></div>
                                                        </div>

                                                        <div 
                                                        className='CourseDitalspart4Tittle'>
                                                            <div className='CourseTiditalspart4IconsTittle'><i><MdAssignmentAdd /></i>
                                                             <h4>ডিস্কাউন্টে বর্তমান মূল্য</h4>
                                                            </div>

                                                            <div className='CourseDitalspart4ContantInfo'><span className='Vortersmyditehobe' >৳৭৯৯৯ টাকা</span></div>
                                                        </div>

                                                        <div 
                                                        className='CourseDitalspart4Tittle'>
                                                            <div className='CourseTiditalspart4IconsTittle'><i><MdAssignmentAdd /></i>
                                                             <h4 >ভর্তির সময় দিতে হবে</h4>
                                                            </div>

                                                            <div className='CourseDitalspart4ContantInfo'><span className='Vortersmyditehobe' >৳৯৯৯ টাকা</span></div>
                                                        </div>



                                                    </div>

                                                    <div className='CourseDitalspart4MiddleInfoText'>
                                                        <div className='Infotextstart'>
                                                            <span>বাকি ৭,০০০ টাকা প্রতি মাসে মিনিমাম ১০০০ টাকা বা (তারও বেশি দিতে পারবে) প্রদান করে, টোটাল ৭,৯৯৯ টাকা পরিশোধ করতে হবে 
                                                                <p>
                                                            অথবা তুমি যদি, <br />
                                                            পুরো কোর্স ফি একবারে প্রদান করো তাহলে মাত্র ৭,০০০ টাকায় পুরো কোর্স টি করতে পারবে।</p>

                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className='CourseDitralspart4EndBtnGRoup'>
                                                        <Link>
                                                            <button>ভর্তি হও</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className='CourseDitalspageRightPart'>
                                <div className='CourseDitalsRightPartContainer'>
                                    <div className='CourseRightPartConatent'>

                                        <div className='CourseRightpartHeaderSection'>
                                            <div className='CourseRightPartHeaderContainer'>
                                                <div className='CourseRightPartHeaderCotant'>

                                                 <div className='CourseDitalsTittle ActiveNaveThis'>
                                                     <h2>বিস্তারিত</h2>
                                                 </div>

                                                 <div className='CourseDitalsTittle'>
                                                     <h2>কারিকুলাম</h2>
                                                 </div>

                                                 <div className='CourseDitalsTittle'>
                                                     <h2>টিউটোর</h2>
                                                 </div>

                                                 <div className='CourseDitalsTittle'>
                                                     <h2>ভিডিও</h2>
                                                 </div>
                                                 <div className='CourseDitalsTittle'>
                                                     <h2>মন্তব্য</h2>
                                                 </div>
                                                    
                                                </div>
                                            </div>
                                        </div>

                                        <div className='CourseRightpartMIddlepartSection'>
                                            <div className='CourseRightMiddlepartContainer'>
                                                <div className='CourseRightPartContant'>

                                                    <div className='bestaritobox'>
                                                    <div className='CourseTittleContnt'>
                                                        <h3>কোর্স সম্পর্কে</h3>
                                                    </div>

                                                    <div className='infotextaboutcourseContant'>
                                                        <p>
                                                            {
                                                            textabotcourse.text
                                                            }
                                                        </p>
                                                    </div>
                                                    </div>

                                                    <div className='CariculamBox'>
                                                        <div className='CariculamBoxCOntiner'>
                                                            <div className='CariculamBoxContant'>

                                                                <div className='TittleCariculam'>
                                                                    <h2>কোর্সে আলোচনার বিষয়বস্তু</h2>
                                                                </div>

                                                                <div className='CariculamBtGrop'>

                                                                    <div className='CariculamBtn'>
                                                                    <button className={`${opencariculam ? "bg-change" : "bg-color-this-won" }`} onClick={() =>setcariculamopen(!opencariculam)}>Degital Marketing</button>
                                                                    </div>
                                                               
                                                                </div>

                                                                {
                                                                    opencariculam && (
                                                                        <div className='CariculamItemDitalsContainer'>
                                                                        <div className='CariculamItemContant'>
    

                                                                        {
                                                                            cariculam && cariculam.map((el, index) =>{
                                                                                return(
                                                                                    <div key={index} className='CariculamItemTittle'>
                                                                                    <i><BsArrowRightSquare /></i>
                                                                                    <span>{index}</span>    
                                                                                   <h4>{el.name}</h4>
                                                                                </div>
        
                                                                                )
                                                                            })
                                                                        }
                                                           
                                                          
    
    
                                                                        </div>
    
                                                                    </div>
                                                                    )
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

                    </div>
                </div>
            </div>
        </div>
     </div>  
   </div>
  )
}
