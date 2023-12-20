/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import MainFoterMoabilMenu from '../../layout/Footer/FooterMobailMenu/MainFoterMoabilMenu'
import { Header } from '../../layout/Header/Header'
import "./MainUserProfile.scss"

const MainUserProfile = () => {
  return (
    <div id='root--mainuserprofile'>
      <Header />

      <Outlet />
      <MainFoterMoabilMenu />
    </div>
  )
}

export default MainUserProfile
