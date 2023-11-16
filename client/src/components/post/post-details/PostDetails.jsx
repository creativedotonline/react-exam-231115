import { useEffect, useState } from "react";
import HeadingSection from "../../header/HeadingSection";
import { useParams } from "react-router-dom";

import * as postServices from '../../services/postServices'

export default function PostDetails(){
	const [post, setPost] = useState({});
	const {postId}=useParams();
	
	useEffect(()=>{
		postServices.getOne(postId)
			.then(setPost);
	},[postId]);
	return(
		<>
		<HeadingSection></HeadingSection>
			<div className="wrapper">
				<main className="main">
					<section className="single-post">
					<div className="single-post-grid-image">
						<img className="single-post-grid-img-top" src={post.imageUrl} alt={post.title}/>
					</div>
						<h1>{post.title}</h1>
						<span className="post-category col-md-6 col-right-border">{post.category}</span>
						<span className="post-user-evel col-md-6">{post.userLevel}</span>
						<p>{post.summery}</p>
						{/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. {post.height}</p> */}
					</section>
				</main>
			</div>
		</>
	);
}