import HeadingSection from "../header/HeadingSection"
import { useForm } from '../hooks/useForm'

export default function Login() {
	const {values, onChange, onSubmit } = useForm({
		email:'',
		password:'',
	});
	return (
		<>
			<HeadingSection />
			<div className="wrapper register-page">
				<main className="main">
					<section className="controlledForm_section">
						<div className="container ">
							<form onSubmit={onSubmit}>
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
											value={values['email']}
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
											placeholder="Password"
											onChange={onChange}
											value={values['password']}
										/>
									</div>
								</div>
								<div>
									<button type="button" className="btn btn-green-gradient" onClick=''>Register</button>
									<button type="button" className="btn btn-pink-gradient" onClick=''>Reset</button>
								</div>
							</form>
						</div>
					</section>
				</main>
			</div>
		</>
	);
}