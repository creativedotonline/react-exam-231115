import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as postServices from '../../../services/postServices'

export default function PostDetails(){
	const [post, setPost] = useState({});
	const {postId}=useParams();
	
	useEffect(()=>{
		postServices.getOne(postId)
			.then(setPost);
	},[postId]);
	return(
		<>
			<div className="wrapper">
				<main className="main">
					<section className="single-post">
						<div className="container">
							<div className="single-post-grid-image">
								<img className="single-post-grid-img-top" src={post.imageUrl} alt={post.title}/>
							</div>
							<div className="single-post-heading">
								<h1>{post.title}</h1>
								<span className="post-category col-md-6 col-right-border">{post.category}</span>
								<span className="post-user-evel col-md-6">{post.userLevel}</span>
							</div>
								
								<p>{post.summery}</p>
								{/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. {post.height}</p> */}
							</div>
					</section>
				</main>
			</div>
		</>
	);
}