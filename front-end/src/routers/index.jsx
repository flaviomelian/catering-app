import { createBrowserRouter } from 'react-router-dom'
import Root from '../layout/Root'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import AboutUs from '../pages/AboutUs/AboutUs'
import Suggestions from '../pages/Suggestions/Suggestions'

const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children:[{
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/suggestions',
        element: <Suggestions />,
      },
      ],
    },
  ])
export default router 