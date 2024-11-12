import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import Home from './Home/Home.jsx';
import LanguageContext from './contexts/LanguageContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageContext>
      <RouterProvider router={router} />
    </LanguageContext>    
  </StrictMode>,
)
