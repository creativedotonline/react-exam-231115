import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import "./HeaderStyle.css"
import AuthContext from "../../contexts/authContext.jsx";
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
        userImg,
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
							<li className={(url === "/user-list" ? " active nav-item" : "nav-item")}>
								<Link className="nav-link" to="/user-list">
									Users
									<span className="sr-only">(current)</span>
								</Link>
							</li>
							{/* <li className={(url === "/post" ? " active nav-item" : "nav-item")}>
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
							</li>*/}
                            <li className={(url === "/allusers" ? " active nav-item" : "nav-item")}>
								<Link className="nav-link" to="/allusers">
                                Users2
									<span className="sr-only">(current)</span>
								</Link>
							</li>
							<li className={(url === "/testimonials" ? " active nav-item" : "nav-item")}>
								<Link className="nav-link" to="/testimonials">
									Testimonials
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
												Add Post
												<span className="sr-only">(current)</span>
											</Link>
										</li>
										{/* <li id="user-logout" className={(url === "/logout" ? " active nav-item" : "nav-item")}>
											<Link className="nav-link" to="/logout"><span  className="border-right"> </span>
												<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M320 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM125.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L137.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L238 299l30.9-82.4 5.1 12.3C289 264.7 323.9 288 362.7 288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H362.7c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L57.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM91.2 352H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h69.6c19 0 36.2-11.2 43.9-28.5L157 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L91.2 352z"/></svg>
												Logout
											</Link>
										</li> */}
                                        <li className={(url === "/account" ? " active nav-item" : "nav-item")}>
											<Link className="nav-link" to="/account"><span  className="border-right"> </span>
												<img src={userImg} /><i className="fa fa-user" aria-hidden="true"></i>
												<span className="sr-only">(current)</span><span> {username}</span>
											</Link>
                                            <ul className="submenu">                                                
                                                <li id="user-logout" className={(url === "/account" ? " active nav-item" : "nav-item")}>
                                                    <Link className="nav-link" to="/account"><span  className="border-right"> </span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M512 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H512zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM208 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H304c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H176zM376 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z"/></svg> 
                                                    My Account
                                                        <span className="sr-only">(current)</span>
                                                    </Link>
                                                </li>
                                                <li id="user-logout" className={(url === "/logout" ? " active nav-item" : "nav-item")}>
                                                    <Link className="nav-link" to="/logout"><span  className="border-right"> </span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M320 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM125.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L137.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L238 299l30.9-82.4 5.1 12.3C289 264.7 323.9 288 362.7 288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H362.7c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L57.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM91.2 352H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h69.6c19 0 36.2-11.2 43.9-28.5L157 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L91.2 352z"/></svg>
                                                        Logout
                                                    </Link>
                                                </li>
                                            </ul>
										</li>
									</ul>
								</li>
							)}
							{!isAuthenticated && (
								<li id="guest" className={(url === "/login-register" ? " active nav-item" : "nav-item")}>
									<Link className="nav-link" to="/login-register">
										{/* <i className="fa fa-user-plus" aria-hidden="true"></i> */}
										<svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512"><path d="M64 64l224 0 0 9.8c0 39-23.7 74-59.9 88.4C167.6 186.5 128 245 128 310.2l0 73.8s0 0 0 0H64V64zm288 0l224 0V384H508.3l-3.7-4.5-75.2-90.2c-9.1-10.9-22.6-17.3-36.9-17.3l-71.1 0-41-63.1c-.3-.5-.6-1-1-1.4c44.7-29 72.5-79 72.5-133.6l0-9.8zm73 320H379.2l42.7 64H592c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48V400c0 26.5 21.5 48 48 48H308.2l33.2 49.8c9.8 14.7 29.7 18.7 44.4 8.9s18.7-29.7 8.9-44.4L310.5 336l74.6 0 40 48zm-159.5 0H192s0 0 0 0l0-73.8c0-10.2 1.6-20.1 4.7-29.5L265.5 384zM192 128a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"/></svg>
										<span className="sr-only">(current)</span> Login
									</Link>
								</li>
							)}
						</ul>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
