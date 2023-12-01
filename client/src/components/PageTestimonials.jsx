
//import SingleTestimonial from "./testimonials/SingleTestimonial";
import { useState, useEffect } from "react";
import PostGridItem from "./post/PostGridItem"

const base_url='https://swapi.dev/api';

const PageTestimonial = () => {
	const [post, setPosts] = useState([]);	

	useEffect(()=>{
		fetch(`${base_url}/people`)
		.then(res => res.json())
		.then(data => {
			setPosts(data.results);
		})
	}, []);

	return (
		<>
		<div className="wrapper">
				<main className="main">
					<section className="post-list">
						<div className="container">
							{post.map((post,index) =>
								<PostGridItem key={post.name} id={index+1} {...post}/>
							)}
						</div>
					</section>
				</main>
		</div>
		</>
	);
}

export default PageTestimonial;