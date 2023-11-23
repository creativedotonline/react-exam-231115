export default function Register(){
	return(
		<div className="content-body">
		<form>
			<div>
                <label htmlFor="firstName">First name</label>
                <div className="input-wrapper">
                    <span><i className="fa-solid fa-user"></i></span>
					<input
						
						type="text"
						id="username"
						name="username"
						value=''
						onChange=''
						// onBlur={() => console.log('onBlur')}
					/>
				</div>
            </div>
            <div>
                <label htmlFor="pass">Password</label>
                <div className="input-wrapper">
                    <span><i className="fa-solid fa-user"></i></span>
					<input
						type="password"
						id="register-password"
						name="password"
						value=''
						//onChange={changeHandler}
					/>
				</div>
            </div>
			<div>
                <label htmlFor="con-pass">Confirm Password</label>
                <div className="input-wrapper">
                    <span><i className="fa-solid fa-user"></i></span>
					<input
						type="password"
						id="confirm-password"
						name="confirm-password"
						value=''
						//onChange={changeHandler}
					/>
				</div>
            </div>
            <div>
                <button className="btn btn-green-gradient" type="submit" >Register</button>
                <button className="btn btn-PINK-gradient" type="button" >Reset</button>
            </div>
            </form>
		</div>
	);
}