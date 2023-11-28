import { useContext, useEffect, useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";

import * as postServices from "../../../services/postServices";
import * as commentService from "../../../services/commentService";
import AuthContext from "../../../contexts/authContext.jsx";
import useForm from "../../../hooks/useForm.js"
import Path from "../../../paths.js";
import {pathToUrl} from "../../../utils/dataUtils.js"

export default function PostDetails() {
	const {email, userId} = useContext(AuthContext)
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

	const addCommentHandler = async (values) => {
		const newComment = await commentService.create(
			postId,
			values.comment,
		);
		
		setComments(state => [...state, {...newComment, owner:{email}}])
		console.log(newComment);
	};

	// temporary solution
	const initialValues = useMemo(()=>({
		comment:'',
	}),[]);

	const {values, onChange, onSubmit} = useForm(addCommentHandler, initialValues);

	// const isOwner = userId === post._ownerId;
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
								<span className="post-category col-md-6 border-right"><span>Category: </span>{post.category}</span>
								<span className="post-user-creator col-md-6">{email}</span>
								<span className="post-user-level col-md-6">Level: {post.userLevel}</span>
							</div>
							<p>{post.summary}</p>
							{userId === post._ownerId && (
							<div className="buttons">
								<Link href={pathToUrl(Path.SinglePostIdEdit, {postId})} className="button btn btn-green-gradient">Edit</Link>
								<Link href={Path.SinglePostIdEdit} className="button btn btn-pink-gradient">Delete</Link>
							</div>
							)}
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
								
								
								<div className="create-comment col-md-6">
									<h3>Add new comment:</h3>
									<form className="form" onSubmit={onSubmit}>
										{/* <input type="text" name="userimage" placeholder="userimage" /> */}
										<textarea 
											name="comment"
											value={values.comment}
											placeholder="Comment......"
											onChange={onChange}
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