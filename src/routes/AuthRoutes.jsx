import { Outlet, Navigate } from 'react-router-dom';

const AuthRoutes = () => {
    const token = localStorage.getItem('token')

    return (
        token ? 
        <Navigate to={'/'} />
        :
        <Outlet />
    );
};

export default AuthRoutes;