import {createBrowserRouter,Navigate,RouterProvider} from 'react-router'
import RootLayout from '../components/RootLayout'
import Home from '../components/Home'
import Register from '../components/Register'
import Login from '../components/Login'
import Technologies from '../components/Technologies'
import Java from '../components/java'
import Nodejs from '../components/Nodejs'
import vue from '../components/vue'
import { Children } from 'react'
function App() {
  //adding routing config
  const routerObj = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout />,
      children : [
        {
          path:"",
          element:<Home />
        },
        {
          path:"Register",
          element:<Register />
        },
        {
         path:"Login",
        element:<Login /> 
        },
        {
          path:"Technologies",
          element:<Technologies />,
          children:[
            {
              index:true,
              element:<Navigate to = "java" replace/>
            },
            {
          path:"java",
          element:<java />
        },
        {
          path:"Nodejs",
          element:<Nodejs />
        },
        {
          path:"vue",
          element:<vue />
        },
          ]
        },
      ]
    }
  ])
  return (
    <RouterProvider router = {routerObj}  />
  )
}
export default App