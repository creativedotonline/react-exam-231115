import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import * as postServices from "../../../services/postServices";
import * as commentService from "../../../services/commentService";
import AuthContext from "../../../contexts/authContext.jsx";

export default function PostDetails() {
	const {email} = useContext(AuthContext)
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);
	const { postId } = useParams();

	useEffect(() => {
		postServices.getOne(postId)
			.then(setPost);
		// then navigate to 404 if not page
		commentService.getAllPerPost(postId)
			.then(setComments);
	}, [postId]);

	const addCommentHandler = async (e) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);

		const newComment = await commentService.create(
			postId,
			formData.get("comment")
		);
		
		setComments(state => [...state, {...newComment, owner:{email}}])
		console.log(newComment);
	};
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
								<span className="post-category col-md-6">{post.category}</span>
								<span className="post-user-evel col-md-6">Level: {post.userLevel}</span>
							</div>
							<p>{post.summary}</p>
						</div>
					</section>
					<section className="single-post-comments">
						<div className="container">
							<div className="row">
							
								<div className="details-comments col-md-6">
								<h3>Comments:</h3>
									<ul>
									{comments.map(({ _id, text, owner:{email} }) => (
											<li key={_id} className="comment">
												<div className="user-bio">
													<span className="user-img">
														<img className="single-post-grid-img-top" src=" " alt={post.title} />
													</span>
												<span className="username">{email}</span>
													</div>
												<p>{text}</p>
											</li>
										))}
									</ul>
									{comments.length === 0 && (
										<p className="no-comment">No comments.</p>
									)}

								</div>

								{/* <div className="buttons">
								<a href="#" className="button btn btn-green-gradient">Edit</a>
								<a href="#" className="button btn btn-pink-gradient">Delete</a>
							</div> */}
								<div className="create-comment col-md-6">
									<h3>Add new comment:</h3>
									<form className="form" onSubmit={addCommentHandler}>
										{/* <input type="text" name="userimage" placeholder="userimage" /> */}
										<textarea 
											name="comment" 
											placeholder="Comment......"
										></textarea>
										<button className="btn close-btn btn-green-gradient"><i className="fa-solid fa-xmark"></i>Submit</button>
									</form>
								</div>
							</div>
						</div>
					</section>
				</main>
			</div>
		</>
	);
}