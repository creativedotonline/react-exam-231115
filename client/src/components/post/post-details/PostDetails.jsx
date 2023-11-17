import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as postServices from "../../../services/postServices"
import * as commentService from "../../../services/commentService"

export default function PostDetails() {
	const [post, setPost] = useState({});
	const { postId } = useParams();

	useEffect(() => {
		postServices.getOne(postId)
			.then(setPost);
	}, [postId]);

	const addCommentHandler = async (e) => {
		e.preventDefault();
		
		const formData = new FormData(e.currentTarget);

		const newComment = await commentService.create(
			postId,
			formData.get("username"),
			formData.get("comment"),
		);
		console.log(newComment);
	}
	return (
		<>
			<div className="wrapper">
				<main className="main">
					<section className="single-post">
						<div className="container">
							<div className="single-post-grid-image">
								<img className="single-post-grid-img-top" src={post.imageUrl} alt={post.title} />
							</div>
							<div className="single-post-heading">
								<h1>{post.title}</h1>
								<span className="post-category col-md-6 col-right-border">{post.category}</span>
								<span className="post-user-evel col-md-6">Level: {post.userLevel}</span>
							</div>

							<p>{post.summery}</p>
							{/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. {post.height}</p> */}
							<section>
								<div className="container">
									<div className="row">								
									<div className="details-comments col-md-6">
										<h2>Comments:</h2>
										<ul>
											<li className="comment">
												<p>Content: I rate this one quite highly.</p>
											</li>
											<li className="comment">
												<p>Content: The best thing.</p>
											</li>
										</ul>
										<p className="no-comment">No comments.</p>
									</div>

									{/* <div className="buttons">
										<a href="#" className="button btn btn-green-gradient">Edit</a>
										<a href="#" className="button btn btn-pink-gradient">Delete</a>
									</div> */}
									<article className="create-comment col-md-6">
										<label>Add new comment:</label>
										<form className="form" onSubmit={addCommentHandler}>
											<input type="text" name="username" placeholder="username" />
											<textarea name="comment" placeholder="Comment......"></textarea>
											<input className="btn submit btn-green-gradient" type="submit" value="Add Comment" />
										</form>
									</article>
									</div>
								</div>
							</section>
						</div>
					</section>
				</main>
			</div>
		</>
	);
}