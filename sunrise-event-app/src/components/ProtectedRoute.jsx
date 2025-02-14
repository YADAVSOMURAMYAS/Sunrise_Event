import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContent } from "../context/AppContext";

const ProtectedRoute = ({ children, allowedRoles }) => {
    const { userData } = useContext(AppContent);

    if (!userData) {
        return <Navigate to="/login" replace />;
    }

    if (!allowedRoles.includes(userData.role)) {
        return <Navigate to="/" replace />; // Redirect non-admin users to home
    }

    return children;
};

export default ProtectedRoute;
