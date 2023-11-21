import HeadingSection from "../header/HeadingSection"
import useForm from '../hooks/useForm'

export default function Login({
	loginSubmitHandler,

}) {
	const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
		email: '',
		password: '',
	});
	return (
		<>
			<HeadingSection />
			<div className="wrapper register-page">
				<main className="main">
					<section className="controlledForm_section">
						<div className="container ">
							<form className="width-half" id="login" onSubmit={onSubmit}>
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
						</div>
					</section>
				</main>
			</div>
		</>
	);
}