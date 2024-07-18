import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import OrderConfirm from './components/OrderConfirm.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />,
    children: [{
      path: '/order-confirm',
      element: <OrderConfirm/>
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
