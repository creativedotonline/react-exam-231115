
import Login from "./login/Login";
import Register from "./register/Register";
import AminBg from "./AnimBg";

export default function PageLoginReg (){
	return(
	<>
	<div className="login-page">
		<main className="main">
			<section>
				<div className="container login-register-form">
					<div className="row">
						<div className="col-md-6 col-right-border">
							<div className="content-title">
							<h3>You are a Lady!</h3>
							<span>Please, login here.</span>
							</div>
							<div className="content-body">
							<Login />				
							</div>			
						</div>
						<div className="col-md-6 ">
						<div className="content-title">
						<h3>Become a Lady!</h3>
						<span>Resgister here.</span>
						</div>
							<Register />
						</div>
					</div>
				</div>
			</section>
		</main>
	</div>
	<AminBg />
	</>
	);
}