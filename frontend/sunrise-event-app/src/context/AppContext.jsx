import { createContext, useState, useContext, useEffect } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

export const AppContent = createContext();

export const AppContextProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedin, setIsLoggedin] = useState(() => {
        // Retrieve login state from localStorage (if available)
        return localStorage.getItem("isLoggedin") === "true";
    });
    const [userData, setUserData] = useState(() => {
        // Retrieve user data from localStorage
        const storedUser = localStorage.getItem("userData");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const getAuthState = async () => {
        try {
            const { data } = await axios.post(`${backendUrl}/api/auth/is-auth`, {}, {
                withCredentials: true,  // <-- FIXED: Moved out of request body
            });

            if (data.success) {
                setIsLoggedin(true);
                localStorage.setItem("isLoggedin", "true");  // Persist login state
                getUserData();
            } else {
                setIsLoggedin(false);
                setUserData(null);
                localStorage.removeItem("isLoggedin");
                localStorage.removeItem("userData");
            }
        } catch (error) {
            console.error(error.response?.data?.message || "Authentication error");
        }
    };

    const getUserData = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/user/data`, {
                withCredentials: true,  // Ensure cookies/session are sent
            });

            if (data.success) {
                setUserData(data.userData);
                localStorage.setItem("userData", JSON.stringify(data.userData)); // Persist user data
            } else {
                toast.error(data.message);
                localStorage.removeItem("userData");
            }
        } catch (err) {
            console.error(err.response?.data?.message || "Error fetching user data");
            localStorage.removeItem("userData");
        }
    };

    useEffect(() => {
        getAuthState(); // Runs on first load to check auth status
    }, []);

    const value = {
        backendUrl,
        isLoggedin,
        setIsLoggedin,
        userData,
        setUserData,
        getUserData
    };

    return (
        <AppContent.Provider value={value}>
            {props.children}
        </AppContent.Provider>
    );
};
