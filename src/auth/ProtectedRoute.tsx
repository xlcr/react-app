import { Navigator, Outlet} from 'react-router-dom'
import Login from './Login'

const ProtectedRoute = () => {
    let user = false;

    if (user)
    {
        return <Outlet/>
    }
    else {
        return <Login/>
    }
}

export default ProtectedRoute;