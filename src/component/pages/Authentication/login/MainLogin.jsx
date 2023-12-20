/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import MainFoterMoabilMenu from '../../../layout/Footer/FooterMobailMenu/MainFoterMoabilMenu'
import { Header } from '../../../layout/Header/Header'
import "./MainLogin.scss"

const MainLogin = () => {
  return (
    <div id='root--mainLogin'>
        <Header />
        <Outlet />
        <MainFoterMoabilMenu />
    </div>
  )
}

export default MainLogin
