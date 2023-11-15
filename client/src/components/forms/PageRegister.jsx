
import HeadingSection from "../header/HeadingSection";
import ControlledForm from "../ControledForm";
import FormRegister from "./FormRegister"

export default function Register (){
	return(
	<>
	<HeadingSection />
	<div className="wrapper">
		<main className="main">
			<section>
				<div className="container">
				<div className="row">
					<div className="col-md-6 "><FormRegister /></div>
					<div className="col-md-6 "><ControlledForm /></div>
					</div>
				</div>
			</section>
		</main>
	</div>
	</>
	);
}