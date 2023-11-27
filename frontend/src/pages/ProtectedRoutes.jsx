import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({user, children}) => {
    if(!user){
        return <Navigate to="/login" />;
    }
    return children;
  return (
    <div>ProtectedRoutes</div>
  )
}

export default ProtectedRoutes