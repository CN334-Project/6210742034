import React from 'react'
import { Navigate } from 'react-router-dom';
import DashboardPage from '../pages/Dashboard/DashboardPage';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({childern}) => {
    let {user} = useAuth();
    if(!user) {
        return <Navigate to="/"/>
    }
    return <DashboardPage/>;
}

export default ProtectedRoute;