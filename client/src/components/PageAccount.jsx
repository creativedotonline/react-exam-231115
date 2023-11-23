
import Login from "./login/Login";
import Register from "./register/Register";

import './PageAccountStyle.css';

export default function Account (){
	return(
	<>
	<div className="wrapper account-page">
		<main className="main">
			<section>
				<div className="container login-register-form">
					<div className="row">
						<div className="col-md-6 col-right-border">
							<div className="title">
							<h3>You are a Lady!</h3>
							<span>Please, login here.</span>
							</div>
							<div className="content-body">
							<Login />				
							</div>			
						</div>
						<div className="col-md-6 ">
						<div className="title">
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
	<div className="maps-default-background">
		<div className="left-bg-elements">
			<span className="tea"></span>
			<span className="chamomile"></span>
			<span className="flower-wrapper left">
				<span className="stems"></span>
				<span className="blossom"></span>
			</span>
			<span className="camera"></span>
		</div>
		<div className="right-bg-elements">
			<span className="flower-wrapper right">
				<span className="stems"></span>
				<span className="blossom"></span>
			</span>
			<span className="candle"></span>
			<span className="flame"></span>
			<span className="notebook"></span>
		</div>
	</div>
	</>
	);
}