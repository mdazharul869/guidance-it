/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FcManager } from "react-icons/fc";
import { Link } from "react-router-dom";
import MainSideBarMenu from '../../pages/SideBarMenu/MainSideBarMenu';
import "./Header.scss";

export function Header ()  {


    useEffect(()=>{

        const headerClassAdd = () =>{
            const d = document.querySelector(".headerPart")
  
            window.scrollY >= 50 ? d.classList.add("aaa") : d.classList.remove("aaa")  
        
        }
        
    
        window.addEventListener("scroll", headerClassAdd)
    },[])



    const [opensidebar, setopensidebar] = useState(false)

    const togglesidebar = opensidebar ? "closesidebar": "activeSidebar"

    // React.useEffect(()=>{
    //     const idsidebar = document.querySelector(".side-bar-menu-section")
    //     idsidebar.classList.add(`${togglesidebar}`)

    // })
   
    const sidebarBtn = () =>{
        setopensidebar(!opensidebar)
            const idsidebar = document.querySelector(".side-bar-menu-section")
      opensidebar ?  idsidebar.classList.add(`active-sidebar`) :  idsidebar.classList.remove('active-sidebar')
    }

  return (
      <section>
        <div className={`SIdebar `}>
            <MainSideBarMenu />
        </div>
        <header className='' id='root--header'>
            <div className='headerPart'>
                <div className='container'>
                    <div className='haeadersection'>
                        <div className='paddingcontainer'>

                            <div className='headercontainner overflow-hidden'>
                                
                                <div className='headerConatnt display-flexs'>
                                    
                                    <div className='HeaderFastSection'>
                                        <div className='HeaderLogoSection'>
                                            <div className='Headerlogo'>
                                                <h3>Guidance <span>it</span></h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='HeaderMiddleSection'>
                                        <div className='HeaderMiddleConatiner'>
                                            <div className='HeaderMiddleConatnt'>
                                                <div className='HeaderMidddleItem'>
                                                    <ul>
                                                        <li><Link>Home</Link></li>
                                                        <li><Link>Course</Link></li>
                                                        <li><Link>Class</Link></li>
                                                        <li><Link>About US</Link></li>
                                                        <li><Link>Conatct</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='HeaderEndSection'>
                                        <div className='HeaderEndContainer'>
                                            <div onClick={sidebarBtn} className='HeaderEndConatnt'>
                                                <span className=''><FcManager />           <p>ম্যানু</p></span>
                                     
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>
      </section>
   
  )
}

