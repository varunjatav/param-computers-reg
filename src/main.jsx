import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

// screens
import AboutUs from './screens/AboutUs/AboutUs.jsx';
import Training from './screens/Training/Training.jsx';
import Contact from './screens/Contact/Contact.jsx';
import Client from './screens/Clients/Clients.jsx';

// components
import MainContainer from './components/MainComp/MainContainer.jsx';

// courses
import WebDevelopment from './courses/WebDevelopment/WebDevelopment.jsx';
import Database from './courses/Database/Database.jsx';
import Programming from './courses/Programming/Programming.jsx';
import Excel from './courses/Excel/Excel.jsx';
import WebDesign from './courses/WebDesign/WebDesign.jsx';
import DigitalMarketingCourse from './courses/DigitalMarketing/DigitalMarketingCourse.jsx';

// clients
import DigitalMarketing from './clients/DigitalMarketing/DigitalMarketing.jsx';
import AppCreation from './clients/AppCreation/AppCreation.jsx'
import Website from './clients/Website/Website.jsx';
import Software from './clients/Software/Software.jsx';


import { Provider } from 'react-redux';
import paramStore from './store/index.js';

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  children: [
    {
      path: '/',
      element: <MainContainer/>
    },
    {
      path: '/aboutus',
      element: <AboutUs/>
    },
    {
      path: '/contact',
      element: <Contact/>
    },
    {
      path: '/training',
      element: <Training/>
    },
    {
      path: '/training/excel-course',
      element:<Excel/>
    },
    {
      path: '/training/web-development-course',
      element:<WebDevelopment/>
    },
    {
      path: '/training/web-design-course',
      element:<WebDesign/>
    },
    {
      path: '/training/database-course',
      element:<Database/>
    },
    {
      path: '/training/programming-course',
      element:<Programming/>
    },
    {
      path: '/training/digital-marketing-course',
      element:<DigitalMarketingCourse/>
    },
    {
      path: '/client',
      element: <Client/>
    },
    {
      path: '/client/website-services',
      element: <Website/>
    },
   
    {
      path: '/client/digital-marketing-services',
      element:<DigitalMarketing/>
    },
    {
      path: '/client/app-services',
      element:<AppCreation/>
    },
    {
      path: '/client/software-services',
      element:<Software/>
    },
   
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={paramStore}>
   <RouterProvider router={router}/>
   </Provider>
  </React.StrictMode>,
)
