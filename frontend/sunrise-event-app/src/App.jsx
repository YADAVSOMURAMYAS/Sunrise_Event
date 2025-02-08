
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Service from './pages/Service/Service'
import Gallery from './pages/Gallery/Gallery'
import Contact from './pages/Contact/Contact'
import Booking from './pages/Booking/Booking'

function App() {
    const router=createBrowserRouter(
      [
        {
          path: '/', 
          element:<>  <Home/> </>
        },
        {
          path: '/login', 
          element:<>  <Login/> </>
        },
        {
          path: '/signup', 
          element:<>  <Signup/> </>
        },
        {
          path: '/services', 
          element:<>  <Service/> </>
        },
        {
          path: '/gallery', 
          element:<>  <Gallery/> </>
        },
        {
          path: '/booking', 
          element:<>  <Booking/> </>
        },
        {
          path: '/contact', 
          element:<>  <Contact/> </>
        },
      ]
    )



 return(
  <RouterProvider router={router}>     
  </RouterProvider>
 )
}

export default App
