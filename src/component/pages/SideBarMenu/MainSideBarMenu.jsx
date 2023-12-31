/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import "./MainSideBarMenu.scss"


const MainSideBarMenu = () => {
  return (
    <div id='root--sidebar'>
      <div className='side-bar-menu-section'>
        <div className='side-bar-menu-container xl-343-34'>
            <div className='side-bar-menu-contant xl-343-434-4'>
                <div className='sidebar-header-middle-end-container'>

                    <div className='sidebar-header-image xl-3434-24'>
                        <div className='sidebar-menu-header-img'>
                            <img src={`https://raw.githubusercontent.com/mdazharul869/all-img/main/Full%20Stack%20Web%20Developer_Full%20Stack%20Developer_front%20end%20developer_reac.js_node.js_developer_html_css_express.js_md%20azharul-%20web%20devoloper%20-%20font%20end%20devoloper%20-%20web%20aplication%20-%20html%20-%20css%20-%20java%20-%20e-commarce%20.png`} alt='' />
                        </div>
                    </div>

                    <div className='sidebar-menu-middle-contant xl-34-34324'>
                        <div className='sidebar-middle-contant xl-343-34'>

                            <div className='sidebar-middle-btn-group xl-232-43'>
                                <Link><button>ড্যাশবোর্ড</button></Link>
                            </div>

                            <div className='sidebar-middle-btn-group xl-232-43'>
                                <Link><button className='password-wrong-forget'>প্যাসওয়ার্ড ভুলে গেসি</button></Link>
                            </div>

                            <div className='sidebar-middle-btn-group xl-232-43'>
                                <Link><button>ড্যাশবোর্ড</button></Link>
                            </div>

                        </div>
                    </div>

                    <div className='sidebar-menu-end-container xl-343'>
                        <div className='sidebar-menu-end-contant cl-34'>
                            <div className='login-container-sidebar xl-434'>
                                <Link to={'/account/login'}>লগহন করূন</Link>
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

export default MainSideBarMenu
