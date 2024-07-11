import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './routes/Root'
import MainPage from './routes/MainPage'
import ErrorPage from './routes/ErrorPage'
import Sabores from './routes/Sabores'
import Presentaciones from './routes/Presentaciones'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [{
      path: '/Main',
      element: <MainPage/>,
    },{
      path: '/sabores',
      element: <Sabores/>
    },{
      path: '/Presentaciones',
      element: <Presentaciones/>
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
