
import Login from "./login/Login";
import Register from "./register/Register";
import AminBg from "./AnimBg";
import { useContext } from "react";
import AuthContext from "/src/contexts/authContext.jsx";

export default function PageAccount (){
    const {
		isAuthenticated,
		username,
        userImg,
	} = useContext(AuthContext);
	return(
	<>
	<div className="account-page">
		<main className="main">
			<section>
				<div className="container login-register-form">
					<div className="row">
						<div className="col-md-6 col-right-border">
							<div className="content-title">
							<h3>Welcome, {username}!</h3>
							<span></span>
							</div>
							<div className="content-body">
								{userImg}
							</div>			
						</div>
						<div className="col-md-6 ">
                            <div className="content-title">
                            <h3>Welcome, {username}!</h3>
                            <span>Personal Info</span>
                            </div>
                            <div className="content-body">
								{username}
							</div>
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