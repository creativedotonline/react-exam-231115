
import HeadingSection from "../header/HeadingSection";
import ControlledForm from "../ControledForm";
import FormRegister from "../forms/FormRegister"

export default function Register (){
	return(
	<>
	<HeadingSection />
	<div className="wrapper register-page">
		<main className="main">
			<section>
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-right-border">
							<h3>Become part of ladies world</h3>
							<FormRegister />
						</div>
						<div className="col-md-6 ">
							<h3>You are already part of the ladies club</h3>
							<ControlledForm />
						</div>
					</div>
				</div>
			</section>
		</main>
	</div>
	</>
	);
}