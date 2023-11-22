import { useContext } from 'react';
import useForm from '../hooks/useForm'
import AuthContext from '../../contexts/authContext';
const LoginFormKey={
	Email:'email',
	Password:'password',
}
export default function Login() {
	const {loginSubmitHandler}= useContext(AuthContext);
	const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
		[LoginFormKey.Email]: '',
		[LoginFormKey.Password]: '',
	});
	return (
		<>
							<form id="login" onSubmit={onSubmit}>
								<div className="form-row">
									<div className="form-group">
										<label htmlFor="username" >Username</label>
										<div className="input-wrapper">
											<span><i className="fa-solid fa-user"></i></span>
											<input
												type="email"
												id="email"
												name="email"
												placeholder="Your Email"
												onChange={onChange}
												value={values.email}
											/>
										</div>
									</div>
									<div className="form-group">
										<label htmlFor="password" >Password</label>
										<div className="input-wrapper">
											<span><i className="fa-solid fa-lock"></i></span>

											<input
												type="password"
												name="password"
												id="password"
												placeholder="Password"
												onChange={onChange}
												value={values.password}
											/>
										</div>
									</div>
								</div>
								<div id="form-actions">
									<input type="submit" className="btn close-btn btn-green-gradient" value="Login" />
								</div>
								<p>Would you like to become part of Ladypopuler Club? Please visit here.</p>
							</form>
		</>
	);
}