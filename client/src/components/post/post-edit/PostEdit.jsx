
import { useNavigate, useParams } from "react-router-dom";
import * as postServices from '/src/services/postServices'
import { useEffect, useState } from "react";
import AminBg from "/src/components/animbg/AnimBg";

export default function PostEdit() {
	const navigate = useNavigate();
	const {postId}=useParams();
	const [post, setPost] = useState({
		title:'',
		category:'',
		userLevel:'',
		imageUrl:'',
		summary:'',
	});

	useEffect(()=>{
		postServices.getOne(postId)
			.then(result =>{
				setPost(result);
			})
	},[postId]);

	const editPostSubmitHandler = async (e) => {
		e.preventDefault();

		const values = Object.fromEntries(new FormData(e.currentTarget));
		try {
			await postServices.edit(postId,values);

			navigate('/post-list');
		} catch (err) {
			// some err notification
			console.log(err);
		}
	}

	const onChange = (e) => {
		setPost(state => ({
			...state,
			[e.target.name]: e.target.value
		}));
	};

	return (
		<>			
		<div className="content-body">
			<form id="edit-post" onSubmit={editPostSubmitHandler}>
				<div className="">
					<div className="form-row">
						<div className="form-group">
							<label htmlFor="leg-title">Post title:</label>
							<input 
								type="text" 
								id="title" 
								name="title" 
								placeholder="Enter game title..." 
								value={post.title}
								onChange={onChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="category">Category:</label>
							{/* <input type="text" id="category" name="category" placeholder="Enter game category..." /> */}
							<select 
								id="category"  
								name="category"
								value={post.category}
								onChange={onChange}
							>
								<option value="appartment">Appartment</option>
								<option value="boyfrined">Boyfrined</option>
								<option value="collections">Collections</option>
								<option value="events">Events</option>
								<option value="fashion Arena">Fashion Arena</option>
							</select>
						</div>
					</div>
					<div className="form-row">
						<div className="form-group">
							<label htmlFor="levels">Your Game Level:</label>
							<input 
								type="number" 
								id="userLevel" 
								name="userLevel" 
								min="1" 
								placeholder="1"
								value={post.userLevel}
								onChange={onChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="game-img">Image:</label>
							<input 
								type="text" 
								id="imageUrl" 
								name="imageUrl" 
								placeholder="Upload a photo..."
								value={post.imageUrl}
								onChange={onChange}
							/>
						</div>
					</div>
					<div className="form-row block">
						<label htmlFor="summary" name="summary">Summary:</label>
						<textarea 
							name="summary" 
							id="summary"
							value={post.summary}
							onChange={onChange}
						></textarea>

					</div>
					<div className="form-row block text-align-center">
						<input className="btn submit btn-pink-gradient" type="submit" value="Edit Game" />
					</div>
				</div>
			</form>
		</div>
		</>
	);
}