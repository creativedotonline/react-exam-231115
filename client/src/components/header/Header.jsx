import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import "./HeaderStyle.css"
import AuthContext from "../../contexts/authContext";
// import "./units/dataUnits.js"


const Header = () => {
	const location = useLocation(); // once ready it returns the 'window.location' object
	const [url, setUrl] = useState(null);
	useEffect(() => {
		setUrl(location.pathname);
	}, [location]);

	// Sticky Menu Area
	useEffect(() => {
		window.addEventListener('scroll', isSticky);
		return () => {
			window.removeEventListener('scroll', isSticky);
		};
	});

	/* Method that will fix header after a specific scrollable */
	const isSticky = () => {
		const header = document.querySelector('.header_section');
		const scrollTop = window.scrollY;
		scrollTop >= 150 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
	};

	const {
		isAuthenticated,
		username,
	} = useContext(AuthContext);
	return (
		<header className="header_section d-none d-xl-block header">
			<div className="container-fluid">
				<nav className="navbar navbar-expand-lg custom_nav-container ">
					<Link to="/" className="navbar-brand">
						<span>
							<img src="/src/assets/images/logo-en.png" alt="" className="logo" />
						</span>
					</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className=""> </span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav  ">
							<li className={(url === "/" ? " active nav-item" : "nav-item")}>
								<Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
							</li>
							<li className={(url === "/user-list" ? " active nav-item" : "nav-item")}>
								<Link className="nav-link" to="/user-list">
									User List
									<span className="sr-only">(current)</span>
								</Link>
							</li>
							<li className={(url === "/post" ? " active nav-item" : "nav-item")}>
								<Link className="nav-link" to="/post">
									Posts
									<span className="sr-only">(current)</span>
								</Link>
							</li>

							<li className={(url === "/character-list" ? " active nav-item" : "nav-item")}>
								<Link className="nav-link" to="/character-list">
									Character List
									<span className="sr-only">(current)</span>
								</Link>
							</li>
							<li className={(url === "/post-list" ? " active nav-item" : "nav-item")}>
								<Link className="nav-link" to="/post-list">
									PostList
									<span className="sr-only">(current)</span>
								</Link>
							</li>

							{/* <li className={(url === "/login" ? " active nav-item" : "nav-item")}>
								<Link className="nav-link" to="/login">
									<i className="fa fa-user" aria-hidden="true"></i>
									<span className="sr-only">(current)</span>
								</Link>
							</li> */}

							{isAuthenticated && (
								<li id="user" className="nav-item">
									<ul>
										<li id="post-create" className={(url === "/post-create" ? " active nav-item" : "nav-item")}>
											<Link className="nav-link" to="/post-create">
												Create Posts
												<span className="sr-only">(current)</span>
											</Link>
										</li>
										<li id="user-logout" className={(url === "/logout" ? " active nav-item" : "nav-item")}>
											<Link className="nav-link" to="/logout"><span  className="border-right">Logout </span>
												<i className="fa fa-user" aria-hidden="true"></i> 
												<span className="sr-only">(current)</span><span> {username}</span>
											</Link>
										</li>
									</ul>
								</li>
							)}
							{!isAuthenticated && (
								<li id="guest" className={(url === "/account" ? " active nav-item" : "nav-item")}>
									<Link className="nav-link" to="/account">
										<i className="fa fa-user-plus" aria-hidden="true"></i>
										<span className="sr-only">(current)</span> Login
									</Link>
								</li>
							)}
							<form className="form-inline">
								<button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
									<i className="fa fa-search" aria-hidden="true"></i>
								</button>
							</form>
						</ul>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
