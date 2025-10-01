import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const PrivateRoute = () => {
	const auth = useAuth();
	const { user, loading } = auth;

	if (loading) return <div>Loading...</div>;

	return user ? <Outlet /> : <Navigate to={"/admin"} replace />;
};

export default PrivateRoute;
