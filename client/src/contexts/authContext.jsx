import { createContext } from "react";
import { useNavigate } from 'react-router-dom'


import * as authService from "../services/authService"
import usePersistedState from "../hooks/usePersistedState"
import Path from "../paths"

const AuthContext = createContext();

export const AuthPovider = ({
	children,
}) => {
	const navigate = useNavigate();
	const [auth, setAuth] = usePersistedState('auth', {});

	const loginSubmitHandler = async (values) => {
		const result = await authService.login(values.email, values.password);
		setAuth(result);
        
		localStorage.setItem('accessToken', result.accessToken);
        localStorage.setItem('userId', result._id);
		navigate(Path.Home);
	};

	const registerSubmitHandler = async (values) => {
		const result = await authService.register(values.email, values.username, values.password, values.userimg, values.userphone);

		setAuth(result);
		localStorage.setItem('accessToken', result.accessToken);
		
		navigate(Path.PageAccount);console.log(result)
	};

	const logoutHandler = () => {
		setAuth({});
		localStorage.removeItem('accessToken');
	};

	const values = {
		loginSubmitHandler,
		registerSubmitHandler,
		logoutHandler,
		username: auth.username || auth.email,
		email: auth.email,
		userId:auth._id,
		isAuthenticated: !!auth.accessToken,
	};
	return (
		<AuthContext.Provider value={values}>
			{children}
		</AuthContext.Provider>
	);
}

AuthContext.displayName = "AuthContext";

export default AuthContext;