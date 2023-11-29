
import { useNavigate, useParams } from "react-router-dom";
import * as postServices from '../../../services/postServices'
import useForm from "../../../hooks/useForm"
import { useEffect, useState } from "react";

export default function PostEdit() {
	const navigate = useNavigate();
	const {postId}=useParams();
	const [post, setPost] = useState({
		title:'',
		category:'',
		userLevel:'',
		imageUrl:'',
		summery:'',
	});

	useEffect(()=>{
		postServices.getOne(postId)
			.then(result =>{
				setPost(result);
			})
	},[postId]);

	const editPostSubmitHandler = async (e) => {
		e.preventDefault();

		const FormData = new FormData(e.currentTarget);
		const values = Object.fromEntries(FormData);
		console.log(values);

		// try {
		// 	await postServices.edit(postId,values);

		// 	navigate('/post-list');
		// } catch (err) {
		// 	// some err notification
		// 	console.log(err);
		// }
	}

	return (
		<>
			{/* <section id="create-page" className="auth"> */}
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
									//value={value.title}
									
								/>
							</div>
							<div className="form-group">
								<label htmlFor="category">Category:</label>
								{/* <input type="text" id="category" name="category" placeholder="Enter game category..." /> */}
								<select 
									id="category"  
									name="category"
									//value={value.category}
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
									//value={value.userLevel}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="game-img">Image:</label>
								<input 
									type="text" 
									id="imageUrl" 
									name="imageUrl" 
									placeholder="Upload a photo..."
									//value={value.imageUrl}
								/>
							</div>
						</div>
						<div className="form-row">
							<label htmlFor="summary" name="summary">Summary:</label>
							<textarea 
								name="summary" 
								id="summary"
								//value={value.summery}
							></textarea>

						</div>
						<div className="form-row">
							<input className="btn submit btn-pink-gradient" type="submit" value="Edit Game" />
						</div>
					</div>
				</form>
			</div>
			{/* </section> */}

		</>
	);
}