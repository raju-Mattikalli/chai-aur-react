import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider , createBrowserRouter, createRoutesFromElements , Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/home.jsx'
import About from './components/about/About.jsx'

import Contact from './components/Contact/Contact.jsx';





const router = createBrowserRouter([
  {
    path:'/',
    element : <Layout/>,
    children:[

        {
          path:"" ,
          element:<Home/>

        },
        {
          path:"about/:userid" ,
          element:<About/>
        },
        {
          path:"contact" ,
          element:<Contact/>
        },

       


    ]
  }
])

// const router = createBrowserRouter([
//   createRoutesFromElements(
//     <Route path='/' element ={<Layout/>}>
//       <Route index element ={<Home/>}/>
//       <Route path='about' element ={<About/>}/>
//       <Route path='contact' element ={<Contact/>}/>


//     </Route>
//   )
// ])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
