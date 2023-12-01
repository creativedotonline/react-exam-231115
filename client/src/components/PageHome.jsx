import { useEffect, useState } from "react";

import HeroSection from "./header/HeroSection";
import About from "./About";
import ClientSection from "./ClientSection"
import LatestPost from "./post/latest-post/LatestPost";
import * as postServices from "../services/postServices"
import PageTestimonial from "./PageTestimonials";

export default function PageHome(
	_id,
	accessToken,
	email,
) {
	const [latestPost, setLatestPost] = useState([]);

	useEffect(() =>{
		postServices.getLatest()
			.then(result => setLatestPost(result));
	},[])

    return(
        <>
		<HeroSection />
        <div className="wrapper">	
			<main className="main">
				<section className="post-list">
					<h2>Latest posts</h2>
					<div className="container">
					{latestPost.map(post =>  <LatestPost key={_id} {...post} /> )}
					
					{!latestPost.length && <p className="no-articles">No posts yet.</p>}
					</div>
				</section>
			<About />
			<ClientSection />
			<PageTestimonial />
		</main>
		</div>
    </>
    );
}
