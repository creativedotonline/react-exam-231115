
import { useNavigate } from "react-router-dom";
import * as postServices from '../../../services/postServices'

export default function PostCreate() {
	const navigate = useNavigate();
	const createPostSubmitHandler = async (e) => {
		e.preventDefault();
		// const{
		// 	title,
		// 	category,
		// 	userlevel,
		// 	imageUrl,
		// 	summary
		// } = Object.fromEntries(new FormData(e.currentTarget));
		const postData = Object.fromEntries(new FormData(e.currentTarget));

		try{
			await postServices.create(postData);

			navigate('/post-list');
		} catch(err){
			// some err notification
			console.log(err);
		}
		

	}
	return (
		<>
		{/* <section id="create-page" className="auth"> */}
			<div className="content-body">
			<form id="create" onSubmit={createPostSubmitHandler}>
				<div className="">
					<div className="form-row">
						<div className="form-group">
							<label htmlFor="leg-title">Post title:</label>
							<input type="text" id="title" name="title" placeholder="Enter game title..." />
						</div>
						<div className="form-group">
							<label htmlFor="category">Category:</label>
							<input type="text" id="category" name="category" placeholder="Enter game category..." />
						</div>
					</div>
					<div className="form-row">
						<div className="form-group">
							<label htmlFor="levels">Your Game Level:</label>
							<input type="number" id="maxLevel" name="userLevel" min="1" placeholder="1" />
						</div>
						<div className="form-group">
							<label htmlFor="game-img">Image:</label>
							<input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />
						</div>
						</div>
					<div className="form-row">
					<label htmlFor="summary" name="summary">Summary:</label>
					<textarea name="summary" id="summary"></textarea>
					<input className="btn submit btn-pink-gradient" type="submit" value="Create Game" />
					</div>
				</div>
			</form>
			</div>
		{/* </section> */}
		
		</>
	);
}