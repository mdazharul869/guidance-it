import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import WebFont from "webfontloader";
import './App.scss';
import MainFoterMoabilMenu from './component/layout/Footer/FooterMobailMenu/MainFoterMoabilMenu';
import { Header } from './component/layout/Header/Header';


function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

  
  }, []);



  return (
    <>
     <div className='' id='root-home'>
        <Header />
        <Outlet />
        <MainFoterMoabilMenu />
     </div>
    </>
  )
}

export default App
