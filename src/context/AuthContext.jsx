import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		const saved = localStorage.getItem("auth");
		if (saved) {
			try {
				const { token: t, user: u } = JSON.parse(saved); // ✅ এখন user ও পড়বো
				setToken(t);
				setUser(u); //
			} catch (error) {
				console.error("Failed to parse auth", err);
				localStorage.removeItem("auth");
			}
		}
		setLoading(false);
	}, []);

	// Login Function
	const login = async (credentials) => {
		const res = await fetch("http://localhost:5000/api/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(credentials),
		});

		if (!res.ok) {
			const errData = await res.json();
			toast.warn(errData);
			return;
		}

		const data = await res.json();

		setToken(data.token); // ✅ টোকেন state এ রাখলাম
		setUser(data.user); // ✅ সরাসরি backend থেকে পাওয়া user রাখলাম

		// ✅ token + user localStorage এ রাখবো যাতে refresh করলে না হারায়
		localStorage.setItem(
			"auth",
			JSON.stringify({ token: data.token, user: data.user })
		);

		// localStorage.setItem("auth", JSON.stringify({ token: data.token }));
		setLoading(false);
		toast.success("Log In Successfull.");
		navigate("/dashboard");

		return data.user;
	};

	const logout = () => {
		setUser(null);
		setToken(null);
		localStorage.removeItem("auth");
	};

	return (
		<AuthContext.Provider
			value={{ user, setUser, token, login, loading, logout }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
