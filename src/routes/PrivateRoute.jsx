import { Navigate } from 'react-router-dom';

export { PrivateRoute };

function PrivateRoute({ children }) {
    let token = JSON.parse(localStorage.getItem("token"))
    console.log("userrr", token);
    if (!token) {
        return <Navigate to="/" />
    }
    return children;
}