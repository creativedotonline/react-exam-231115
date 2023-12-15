import { useState } from "react";
import styles from './ControlledForm.module.css';


export default function ControlledForm() {
	const [usernameValue, setUserNameValue] = useState('');
	const [passwordValue, setPasswordValue] = useState('');
	const [ageValue, setAgeValue] = useState('');

	const userNameChangeHandler = (e) => {
		console.log(e.target.value);
		setUserNameValue(e.target.value);
	};

	const resetFormhandler = () => {
		setUserNameValue('');
		setPasswordValue('');
		setAgeValue('');
		resetFormhandler();
	};

	const usernameBlurHandler = () => {
		console.log(`on blur`);
	};
	const passwordChangeHandler = (e) => {
		setPasswordValue(e.target.value);
	}

	const ageChangeHandler = (e) => {
		setAgeValue(Number(e.target.value));
	}

	const submitHandler = ()=>{
		console.log(usernameValue);
		console.log(passwordValue);
		console.log(ageValue);
	}
	return (
		<section className="controlledForm_section">
			<form>
				<div className="form-group">
					<label htmlFor="username" >Username</label>
					<div className="input-wrapper">
                        <span><i className="fa-solid fa-user"></i></span>
					<input
						type="text"
						name="username"
						id="username"
						value={usernameValue}
						onChange={userNameChangeHandler}
						onBlur={usernameBlurHandler}
					/>
					</div>
				</div>
				<div className="form-group">
				<label htmlFor="password" >Password</label>
				<div className="input-wrapper">
                        <span><i className="fa-solid fa-user"></i></span>
					
					<input
						type="password"
						name="password"
						id="password"
						value={passwordValue}
						onChange={passwordChangeHandler}
					/>
				</div>
				</div>
				<div className="form-group">
				<label htmlFor="age">Age</label>
					<div className="input-wrapper">
                        <span><i className="fa-solid fa-user"></i></span>
					
					<input 
						type="number" 
						name="age" 
						id="age" 
						value={ageValue}
						onChange={ageChangeHandler}
					/>
					</div>
				</div>
				<div>
					<button type="button" className="btn btn-green-gradient" onClick={submitHandler}>Register</button>
					<button type="button" className="btn btn-pink-gradient" onClick={resetFormhandler}>Reset</button>
				</div>
			</form>
		</section>
	);
}