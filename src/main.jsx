import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Root/Root';
import LanguageContext from './contexts/LanguageContext';

import ErrorPage from './components/ErrorPage/ErrorPage'
import Home from './components/Home/Home'
import About from './components/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'about',
        element: <About></About>
      }
    ]
  },
], { basename: '/zenithlife' });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageContext>
      <RouterProvider router={router} />
    </LanguageContext>    
  </StrictMode>,
)
