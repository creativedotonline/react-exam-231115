
import Login from "./login/Login";
import Register from "./register/Register"

export default function Account (){
	return(
	<>
	<div className="wrapper register-page">
		<main className="main">
			<section>
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-right-border">
							<h3>You are already part of the ladies club</h3>
							<Login />							
						</div>
						<div className="col-md-6 ">
						<h3>Become part of ladies world</h3>
							<Register />
						</div>
					</div>
				</div>
			</section>
		</main>
	</div>
	</>
	);
}