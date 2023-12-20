import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Login from './component/pages/Authentication/login/Login';
import MainLogin from './component/pages/Authentication/login/MainLogin';
import MainRegestation from './component/pages/Authentication/regestation/MainRegestation';
import Regestation from './component/pages/Authentication/regestation/Ragestation';
import { BachIdDitalsPage } from './component/pages/Home/BachId/BachIdDitalsPage';
import MainbachIdDitals from './component/pages/Home/BachId/MainbachIdDitals';
import CoursesPage from './component/pages/Home/Courses/CoursesPage';
import MainCourse from './component/pages/Home/Courses/MainCourse';
import Home from './component/pages/Home/Home';
import MainSelectbach from './component/pages/Home/SelectBach/mainSelectbach';
import { SelectbachPage } from './component/pages/Home/SelectBach/SelectbachPage';
import MainUserProfile from './component/pages/userProfile/MainUserProfile';
import { UserProfile } from './component/pages/userProfile/userProfile';
import ErrorPage from './errorpage/ErrorPage';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement : <ErrorPage />,
    children:[
      {
        path : "/",
        element : <Home />
    
      },
    ]
  },
  {
    path: "/courses",
    element: <MainCourse />,
    children:[
      {
        path : "/courses",
        element : <CoursesPage />
    
      },
    ]
  },

  {
    path: "/courses/:name",
    element: <MainSelectbach />,
    children:[
      {
        path : "/courses/:name",
        element : <SelectbachPage />
    
      },
    ]
  },

  {
    path: "/courses/:name/:id",
    element: <MainbachIdDitals />,
    children:[
      {
        path : "/courses/:name/:id",
        element : <BachIdDitalsPage />
    
      },
    ]
  },
  {
    path: "/user/:id",
    element: <MainUserProfile />,
    children:[
      {
        path : "/user/:id",
        element : < UserProfile/>
    
      },
    ]
  },
  {
    path: "/account/login",
    element: <MainLogin />,
    children:[
      {
        path : "/account/login",
        element : < Login/>
    
      },
    ]
  },

  {
    path: "/account/regestation",
    element: <MainRegestation />,
    children:[
      {
        path : "/account/regestation",
        element : < Regestation/>
    
      },
    ]
  },







  
])
ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
 
);
