import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { MaterialLayout } from "../../pages/App/MaterialLayout";

const RequireAuth = ({ allowedRole }) => {
    const { data } = useAuth();
    const location = useLocation();

    console.log("USE AUTH DATA: ", data);

    //  State "from" is Used to Bring Back The User From Where it's Begin
    //  or Simply Just a Browser History
    return data?.role === allowedRole ? (
        <MaterialLayout />
    ) : data?.token ? (
        <Navigate to="/unauthorized" state={{ from: location }} replace />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default RequireAuth;
