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
								<span className="post-user-evel col-md-6">Level: {post.userLevel}</span>
							</div>
								
								<p>{post.summery}</p>
								{/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. {post.height}</p> */}
						
							<div className="details-comments">
								<h2>Comments:</h2>
								<ul>
									<li className="comment">
										<p>Content: I rate this one quite highly.</p>
									</li>
									<li className="comment">
										<p>Content: The best game.</p>
									</li>
								</ul>
								<p className="no-comment">No comments.</p>
							</div>

							{/* <div className="buttons">
								<a href="#" className="button btn btn-green-gradient">Edit</a>
								<a href="#" className="button btn btn-pink-gradient">Delete</a>
							</div> */}
							<article className="create-comment">
								<label>Add new comment:</label>
								<form className="form">
									<textarea name="comment" placeholder="Comment......"></textarea>
									<input className="btn submit" type="submit" value="Add Comment" />
								</form>
							</article>
						</div>
					</section>
				</main>
			</div>
		</>
	);
}