import { Navigate } from "react-router-dom";
import Path from '../../paths'
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

export default function AuthGuard(props){
	const {isAuthenticated}=useContext(AuthContext)
	
	if(!isAuthenticated){
		// navigate(Path.Login)
		return <Navigate to={Path.Account}/>;
	}
	return(
		<>
		{props.children}
		</>
	);
}