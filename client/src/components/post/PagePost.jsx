import HeadingSection from "../header/HeadingSection";
import "./PostStyle.css"
import PostGridItem from "./PostGridItem"
import { useState, useEffect } from "react";

const base_url='https://swapi.dev/api';

const PagePost = () => {
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
		<HeadingSection />
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

export default PagePost;