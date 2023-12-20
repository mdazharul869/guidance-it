/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import MainFoterMoabilMenu from '../../../layout/Footer/FooterMobailMenu/MainFoterMoabilMenu'
import { Header } from '../../../layout/Header/Header'
import "./MainbachIdDitals.scss"
const MainbachIdDitals = () => {
  return (
    <div id='root--MainbachIdDitals'>
      
      <Header />
      <Outlet />
      <MainFoterMoabilMenu />
    </div>
  )
}

export default MainbachIdDitals
