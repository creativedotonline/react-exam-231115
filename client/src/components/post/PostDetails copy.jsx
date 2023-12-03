import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import HeadingSection from "../header/HeadingSection";

const postDetails = () => {
	const {id} = useParams();
	const location = useLocation;
	const [post, setPost] = useState({});
	
	useEffect (()=>{
		fetch(`https://swapi.dev/api/people/${id}`)
			.then(res => res.json())
			.then(setPost)
	},[id]);
	
	return(
		<>
		<HeadingSection></HeadingSection>
				<main className="main">
					<section className="single-post">
						<h1>{post.name}</h1>
						<p>{post.height}</p>
						
					</section>
				</main>
		</>
	);
} 

export default postDetails;