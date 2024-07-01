import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import { About, Contact, Github, Home, User } from './components'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path:"contact",
          element:<Contact/>
        },
        {
          path:"user/:id",
          element:<User/>
        },
        {
          path:"github",
          element:<Github/>
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider router= {router} />
)
