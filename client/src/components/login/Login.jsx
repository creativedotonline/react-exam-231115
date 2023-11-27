import { useContext } from 'react';
import useForm from '../../hooks/useForm'
import AuthContext from '../../contexts/authContext.jsx';

const LoginFormKey={
	Email:'email',
	Password:'password', 
}
 
export default function Login() {
	const {loginSubmitHandler} = useContext(AuthContext);
	const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
		[LoginFormKey.Email]: '',
		[LoginFormKey.Password]: '',
	}); 
	return (
		<>
		<form id="login" onSubmit={onSubmit}>
				<div>
					<label htmlFor="username" >Username</label>
					<div className="input-wrapper">
						<span><i className="fa-solid fa-user"></i></span>
						<input
							type="email"
							id="email"
							name={LoginFormKey.Email} 
							placeholder="Your Email"
							onChange={onChange}
							value={values[LoginFormKey.Email]}
						/>
					</div>
				</div>
				<div>
					<label htmlFor="password" >Password</label>
					<div className="input-wrapper">
						<span><i className="fa-solid fa-lock"></i></span>

						<input
							type="password"
							name={LoginFormKey.Password}
							id="password"
							placeholder="Password"
							onChange={onChange}
							value={values[LoginFormKey.Password]}
						/>
					</div>
				</div>
			
			<div id="form-actions">
				<input type="submit" className="btn close-btn btn-green-gradient" value="Login" />
			</div>
		</form>
		</>
	);
}