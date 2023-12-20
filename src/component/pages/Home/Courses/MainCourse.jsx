/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import MainFoterMoabilMenu from '../../../layout/Footer/FooterMobailMenu/MainFoterMoabilMenu'
import { Header } from '../../../layout/Header/Header'
import "./MainCourse.scss"
const MainCourse = () => {
  return (
    <div id='root--courses' className=''>
      <Header/>
      <Outlet />
      <MainFoterMoabilMenu />
    </div>
  )
}

export default MainCourse