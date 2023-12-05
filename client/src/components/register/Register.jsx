import { useContext } from "react";
import AuthContext from "../../contexts/authContext.jsx";
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
	Email:'email',
	Username:'username',
	UserImg:'userimg',
	UserPhone:'userphone',
	Password: 'password',
	ConfirmPassword:'comfirm-password',
};

export default function Register(){
	const {registerSubmitHandler} = useContext(AuthContext);
	const {values, onChange, onSubmit} = useForm(registerSubmitHandler,{
		[RegisterFormKeys.Email]:'',
		[RegisterFormKeys.Username]:'',
		[RegisterFormKeys.Password]:'',
		[RegisterFormKeys.ConfirmPassword]:'',
		[RegisterFormKeys.UserImg]:'',
		[RegisterFormKeys.UserPhone]:'',
	})

	return(
		<div className="content-body">
		<form id="register" onSubmit={onSubmit}>
			<div>
                <label htmlFor="firstName">First name</label>
                <div className="input-wrapper">
                    <span><i className="fa-solid fa-user"></i></span>
					<input
						type="text"
						id="email-register"
						name="email"
						value={values[RegisterFormKeys.Email]}
						onChange={onChange}
					/>
				</div>
            </div>
			<div>
                <label htmlFor="firstName">Username</label>
                <div className="input-wrapper">
                    <span><i className="fa-solid fa-user"></i></span>
					<input
						type="text"
						id="username"
						name="username"
						value={values[RegisterFormKeys.Username]}
						onChange={onChange}
					/>
				</div>
            </div>
            <div>
                <label htmlFor="firstName">User Image</label>
                <div className="input-wrapper">
                    <span><i className="fa-solid fa-image"></i></span>
					<input
						type="text"
						id="userimg"
						name="userimg"
						value={values[RegisterFormKeys.UserImg]}
						onChange={onChange}
					/>
				</div>
            </div>
            <div>
                <label htmlFor="firstName">Phone</label>
                <div className="input-wrapper">
                    <span><i className="fa-solid fa-mobile"></i></span>
					<input
						type="number"
						id="phone"
						name="userphone"
						value={values[RegisterFormKeys.UserPhone]}
						onChange={onChange}
					/>
				</div>
            </div>
            <div>
                <label htmlFor="pass">Password</label>
                <div className="input-wrapper">
                    <span><i className="fa-solid fa-lock"></i></span>
					<input
						type="password"
						id="register-password"
						name="password"
						value={values[RegisterFormKeys.Password]}
						onChange={onChange}
					/>
				</div>
            </div>
			<div>
                <label htmlFor="confirm-pass">Confirm Password</label>
                <div className="input-wrapper">
                    <span><i className="fa-solid fa-lock"></i></span>
					<input
						type="password"
						id="comfirm-password"
						name="comfirm-password"
						value={values[RegisterFormKeys.ConfirmPassword]}
						onChange={onChange}
					/>
				</div>
            </div>
            <div>
                <input className="btn submit btn-green-gradient" type="submit" value="Register" />
            </div>
            </form>
		</div>
	);
}