/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import MainFoterMoabilMenu from '../../../layout/Footer/FooterMobailMenu/MainFoterMoabilMenu'
import { Header } from '../../../layout/Header/Header'
import "./MainSelectbach.scss"

const MainSelectbach = () => {
  return (
    <div id='root--selctbach'>
        <Header />
        <Outlet />
        <MainFoterMoabilMenu />
    </div>
  )
}

export default MainSelectbach
