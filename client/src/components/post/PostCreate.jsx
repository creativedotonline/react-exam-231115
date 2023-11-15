import {create} from "../../services/postServices"

export default function PostCreate(){
	const createPostSubmitHandler = async (e) =>{
		e.preventDefault();
		
		const postData = Object.fromEntries(new FormData(e.currentTarget));
		console.log(postData);
		const result = await create(postData);
		console.log(result);

	}
	return(
		<section id="create-page" className="auth">
			<form id="create" onSubmit={createPostSubmitHandler}>
				<div className="container">
					<label htmlFor="leg-title">Post title:</label>
					<input type="text" id="title" name="title" placeholder="Enter game title..."/>

					<label htmlFor="category">Category:</label>
					<input type="text" id="category" name="category" placeholder="Enter game category..."/>

					<label htmlFor="levels">Your Game Level:</label>
					<input type="number" id="maxLevel" name="userLevel" min="1" placeholder="1"/>

					<label htmlFor="game-img">Image:</label>
					<input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..."/>

					<label htmlFor="summary">Summary:</label>
					<textarea name="summary" id="summary"></textarea>
					<input className="btn submit btn-pink-gradient" type="submit" value="Create Game"/>
				</div>
			</form>
		</section>
	);
}