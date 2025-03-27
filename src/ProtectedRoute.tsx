
import { Navigate, Outlet } from 'react-router-dom';
import { useContextStore } from './Context/ContextApi';


const ProtectedRoute = () => {
    const { token } = useContextStore();
    return token!=null?<Outlet/>:<Navigate to={"/login"}/>;
}

export default ProtectedRoute