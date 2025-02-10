import { createContext, useState, useContext } from "react";
import axios from 'axios'; // Make sure to import axios
import { toast } from 'react-toastify';

export const AppContent = createContext();

export const AppContextProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [userData, setUserData] = useState(null); // Initialize with null instead of false

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