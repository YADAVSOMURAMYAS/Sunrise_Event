import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Service from "./pages/Service/Service";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import Booking from "./pages/Booking/Booking";
import { ToastContainer } from "react-toastify";
import EmailVerify from "./pages/EmailVerify/EmailVerify";
import MultipageForm from "./pages/MultipageForm/MultipageForm";
import ResetPassword from "./pages/ResetPassWord/ResetPassWord";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Admin from "./pages/Admin/Admin";
import ProtectedRoute from "./components/ProtectedRoute";
import Confirmation from "./components/Confirmation/Confirmation";
import logo from "./assets/logo.png"; // Import brand logo
import "./App.css";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Wait for all content & images to load
        const handleLoad = () => setLoading(false);
        window.addEventListener("load", handleLoad);

        return () => window.removeEventListener("load", handleLoad);
    }, []);

    return (
        <div>
            <ToastContainer />

            {/* ✅ Show Loading Screen Until Content Loads */}
            {loading && (
                <div className="loading-screen">
                    <img src={logo} alt="Loading Logo" className="loading-logo" />
                </div>
            )}

            {/* ✅ Main Content */}
            <div className={loading ? "hidden" : "fade-in"}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/services" element={<Service />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/email-verify" element={<EmailVerify />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route path="/multipageform" element={<MultipageForm />} />
                    <Route path="/confirmation" element={<Confirmation />} />

                    {/* ✅ Protected Admin Route */}
                    <Route path="/admin" element={
                        <ProtectedRoute allowedRoles={["admin"]}>
                            <Admin />
                        </ProtectedRoute>
                    } />

                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
