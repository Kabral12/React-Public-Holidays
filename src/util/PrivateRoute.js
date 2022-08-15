import {Outlet, Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
    let authStatus = useSelector(state => state.auth.authStatus);
    return(
        authStatus ? <Outlet/> : <Navigate to="/login"/>
    );
}

export default PrivateRoute;