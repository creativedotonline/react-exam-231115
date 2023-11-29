import { useContext, useEffect, useState, useMemo} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as postServices from "../../../services/postServices";
import * as commentService from "../../../services/commentService";
import AuthContext from "../../../contexts/authContext.jsx";
import useForm from "../../../hooks/useForm.js"
import Path from "../../../paths.js";
import {pathToUrl} from "../../../utils/dataUtils.js"

export default function PostDetails() {
	const navigate = useNavigate();
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

	const deleteButtonClickHandler = async () =>{
		const hasConfirmed = confirm(`Are you sure you would like to delete the ${post.title}?`);

		if(hasConfirmed){
			await postServices.remove(postId);
			
			navigate (`/post-list`);
		}

	}
	
	const {values, onChange, onSubmit} = useForm(addCommentHandler,{
		comment:'',
	});

	// if(Math.random()<.5){
	// 	throw new Error('post details error');
	// }
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
							<div className="buttons text-align-center width-half row-underline-light">
								<Link href={pathToUrl(Path.PagePostEdit, {postId})} className="button btn btn-green-gradient edit-btn">
									<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen-to-square"
										className="svg-inline--fa fa-pen-to-square" role="img" xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 532 512">
										<path fill="currentColor"
											d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z">
										</path>
									</svg> Edit
								</Link>
								{/* <Link href={pathToUrl(Path.SinglePostIdDelete, {postId})} className="button btn btn-pink-gradient delete-btn">
									
								</Link> */}
								<button className="button btn btn-pink-gradient delete-btn" onClick={deleteButtonClickHandler}>
									<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash"
										className="svg-inline--fa fa-trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 498 512">
										<path fill="currentColor"
											d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z">
										</path>
									</svg> Delete
								</button>							
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