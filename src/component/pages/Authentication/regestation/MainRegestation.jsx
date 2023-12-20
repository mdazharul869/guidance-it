/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import MainFoterMoabilMenu from '../../../layout/Footer/FooterMobailMenu/MainFoterMoabilMenu'
import { Header } from '../../../layout/Header/Header'
import "./MainRegestation.scss"

const MainRegestation = () => {
  return (
    <div id='root--mainLogin'>
        <Header />
        <Outlet />
        <MainFoterMoabilMenu />
    </div>
  )
}

export default MainRegestation
