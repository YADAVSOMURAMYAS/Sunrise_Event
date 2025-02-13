
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Service from './pages/Service/Service'
import Gallery from './pages/Gallery/Gallery'
import Contact from './pages/Contact/Contact'
import Booking from './pages/Booking/Booking'
import { ToastContainer} from 'react-toastify';
import EmailVerify from './pages/EmailVerify/EmailVerify'
import MultipageForm from "./pages/MultipageForm/MultipageForm";
import ResetPassword from './pages/ResetPassWord/ResetPassWord'
import PageNotFound from './pages/PageNotFound/PageNotFound'

function App() {
    



 return(
  <div>
    <ToastContainer />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/services" element={<Service />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/email-verify" element={<EmailVerify />} />
      <Route path="/reset-password" element={<ResetPassword />}/>
      <Route path="/multipageform" element={<MultipageForm />} />
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
  </div>
 )
}

export default App
