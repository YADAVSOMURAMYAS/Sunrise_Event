import { createContext, useState, useContext, useEffect } from "react";
import axios from 'axios'; // Make sure to import axios
import { toast } from 'react-toastify';

export const AppContent = createContext();

export const AppContextProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [userData, setUserData] = useState(null); 
    const getAuthState = async () => {
        try {
            const { data } = await axios.post(`${backendUrl}/api/auth/is-auth`, {
                withCredentials: true, // Ensures cookies are sent
            });
    
            if (data.success) {
                setIsLoggedin(true);
                getUserData();
            } else {
                // If backend returns { success: false }, do NOT show error toast
                setIsLoggedin(false);
                setUserData(null);
            }
        } catch (error) {
            // Check if error is from backend response
            const errorMessage = error.response?.data?.message || "An error occurred";
            
            if (error.response?.status !== 401) {
                // Only show error toast if it's not a 401 (unauthorized)
                console.log(errorMessage);
            }
    
            
        }
    };
    
    const getUserData = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/user/data`);
            if (data.success) {
                setUserData(data.userData);
            } else {
                toast.error(data.message);
            }
        } catch (err) {
            // Use err.response.data.message if the server sends an error message
            const errorMessage = err.response?.data?.message || "An error occurred";
            toast.error(errorMessage);
        }
    };
    useEffect(() => {
        getAuthState();
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