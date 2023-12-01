import { Link } from "react-router-dom";


export default function About(){
    return(
        <>
		<div className="pink-gradient-bg">
			<div className="decor layout_padding ">
				<div className="parallax-decor d1"></div>
				<div className="parallax-decor d2" ></div>
				<div className="parallax-decor d3"></div>
				<div className="parallax-decor d4" ></div>
				<div className="parallax-decor d5" ></div>
				<div className="parallax-decor d6"></div>
				<div className="parallax-decor d7"></div>
				<section className="about_section">					
						<div className="container  ">
							<div className="row row-top">
								<div className="heading_container heading_center">
									<h2>
									Welcome to the world of <span><img src="/src/assets/images/logo.png" alt="" /></span>
									</h2>
									<p>
									Magni quod blanditiis non minus sed aut voluptatum illum quisquam aspernatur ullam vel beatae rerum ipsum voluptatibus
									</p>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6 ">
								<div className="img-box">
									<img src="/src/assets/images/ladies.png" alt="" />
								</div>
								</div>
								<div className="col-md-6">
								<div className="detail-box">
									<h3>
									JOIN THOUSANDS OF PLAYERS ONLINE
									</h3>
									<p>
									Ladies, A fantasy world full of magic! And now you can be part of it! Transform yourself with this new collection and show us your goddess / fantasy creation.
									As always, let us know which 1 item you really, really want and you might be lucky enough to be touched by the gods.
									</p>
									<p>
									Customize your own supermodel and guide her through the glamorous world of fashion! Completely free and easy to play, in the Lady Popular world is full of mini-games, malls, pets, boyfriends, and duels!                </p>
									<Link href="" className="btn btn-white">
									Read More
									</Link>
								</div>
								</div>
							</div>
						</div>
				</section>
				<section className="about_section">
					<div className="container  ">
					<div className="row">
						<div className="col-md-6">
								<div className="detail-box">
								<h3>Customize Your Look</h3>
								<p className="section-info">It’s more than a dress up game – Lady Popular lets you completely change your lady’s look at anytime! From skin, hair, makeup, clothes, and accessories - Every look you can imagine is possible - with new style updates appearing every week!</p>
							</div>
						</div>
						<div className="col-md-6">
							<img loading="lazy" width="490" height="280" alt="customize your look" src="/src/assets/images/customize-your-look.jpg" className="customize-image col right-img" />
							<span className="decor-right dc1">
							</span>
						</div>
						</div>
					</div>
				</section>
				<section className="about_section">
					<div className="container  ">
					<div className="row">						
						<div className="col-md-6">
							<img loading="lazy" width="490" height="280" alt="customize your look" src="/src/assets/images/design-fashion-lifestyle.jpg" className="customize-image col right-img" />
							<span className="decor-right dc1">
							</span>
						</div>
						<div className="col-md-6">
								<div className="detail-box">
								<h3>Design your own lifestyle</h3>
								<p className="section-info">Would you rather live in a beachfront bungalow or in a central city high-rise? Customize and decorate your apartment anyway you want! In Lady Popular you can live the full fashion lifestyle.</p>
							</div>
						</div>
						</div>
					</div>
				</section>
			</div>
		</div>
        </>
    );
}