import { useEffect, useState } from "react";

import HeroSection from "./header/HeroSection";
import About from "./about/About";
import LatestPost from "./post/latest-post/LatestPost";
import * as postServices from "../services/postServices"
import ListTestimonials from "./testimonials/TestimonialsList";

export default function PageHome(
	_id,
	accessToken,
	email,
) {
	
	const [latestpost, setLatestpost] = useState([]);
	useEffect(() => {
		postServices.getLatest()
			.then(result => setLatestpost(result))
			.catch(err=>{
				console.log(err);
			});
	}, []);

    return(
        <>
		<HeroSection />
			<main className="main">
				<section className="post-list">
					<div className="container block">
					<h2>Latest posts</h2>
					</div>
					<div className="container">
									
					{latestpost.map(latestpost => (
						<LatestPost key={latestpost._id} {...latestpost} />
					))}

					{!latestpost.length && <p className="no-articles">No posts yet.</p>}
					</div>
				</section>
			<About />
			<ListTestimonials />
		</main>

    </>
    );
}
