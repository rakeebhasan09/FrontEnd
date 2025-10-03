import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About/About";
import Project from "./Pages/Project/Project/Project";
import { ToastContainer } from "react-toastify";
import Contact from "./Pages/Contact/Contact/Contact";
import Service from "./Pages/Service/Service/Service";
import AdminLogin from "./Pages/AdminLogin/AdminLogin";
import DashboardLayout from "./Pages/Dashboard/DashboardLayout/DashboardLayout";
import "./index.css";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import DashboardAbout from "./Pages/Dashboard/DashboardAbout/DashboardAbout";
import MyToolkit from "./Pages/Dashboard/MyToolkit/MyToolkit";
import MyPortfolio from "./Pages/Dashboard/MyPortfolio/MyPortfolio";
import RecentProjects from "./Pages/Dashboard/RecentProjects/RecentProjects";
import DashboardContact from "./Pages/Dashboard/DashboardContact/DashboardContact";
import AddToolkit from "./Pages/Dashboard/AddToolkit/AddToolkit";
import EditToolkit from "./Pages/Dashboard/EditToolkit/EditToolkit";
import AddPortfolio from "./Pages/Dashboard/AddPortfolio/AddPortfolio";
import EditPortfolio from "./Pages/Dashboard/EditPortfolio/EditPortfolio";
import AddRecentProject from "./Pages/Dashboard/AddRecentProject/AddRecentProject";
import EditRecentProject from "./Pages/Dashboard/EditRecentProject/EditRecentProject";
import AdminProfile from "./Pages/Dashboard/AdminProfile/AdminProfile";
import ChangePassword from "./Pages/Dashboard/ChangePassword/ChangePassword";
import RegisterAdmin from "./Pages/RegisterAdmin/RegisterAdmin";
import AdminList from "./Pages/Dashboard/AdminList/AdminList";
import PrivateRoute from "./Pages/Dashboard/PrivateRoute/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "about",
				element: <About></About>,
			},
			{
				path: "services",
				element: <Service></Service>,
			},
			{
				path: "projects",
				element: <Project></Project>,
			},
			{
				path: "contact",
				element: <Contact></Contact>,
			},
		],
	},

	{
		path: "admin",
		element: (
			<AuthProvider>
				<AdminLogin></AdminLogin>,
			</AuthProvider>
		),
	},

	{
		path: "dashboard",
		element: (
			<AuthProvider>
				<PrivateRoute />
			</AuthProvider>
		),
		children: [
			{
				element: <DashboardLayout></DashboardLayout>,
				children: [
					{
						index: true,
						element: <DashboardHome></DashboardHome>,
					},
					{
						path: "about",
						element: <DashboardAbout></DashboardAbout>,
					},
					{
						path: "toolkit",
						element: <MyToolkit></MyToolkit>,
					},
					{
						path: "portfolio",
						element: <MyPortfolio></MyPortfolio>,
					},
					{
						path: "recent-projects",
						element: <RecentProjects></RecentProjects>,
					},
					{
						path: "contact",
						element: <DashboardContact></DashboardContact>,
					},
					{
						path: "add-new-toolkit",
						element: <AddToolkit />,
					},
					{
						path: "add-portfolio",
						element: <AddPortfolio />,
					},
					{
						path: "add-recent-project",
						element: <AddRecentProject />,
					},
					{
						path: "edit-toolkit",
						element: <EditToolkit />,
					},
					{
						path: "edit-portfolio",
						element: <EditPortfolio />,
					},
					{
						path: "edit-recent-project",
						element: <EditRecentProject />,
					},
					{
						path: "profile",
						element: <AdminProfile />,
					},
					{
						path: "change-password",
						element: <ChangePassword />,
					},
					{
						path: "register-admin",
						element: <RegisterAdmin />,
					},
					{
						path: "admin-list",
						element: <AdminList />,
					},
				],
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<HelmetProvider>
			<RouterProvider router={router} />
			<ToastContainer />
		</HelmetProvider>
	</StrictMode>
);
