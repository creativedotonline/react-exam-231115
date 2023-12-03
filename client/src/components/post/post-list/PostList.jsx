import { useEffect, useState } from 'react';
import * as postServices from "../../../services/postServices"
import PostListItem from "../post-list-item/PostListItem";
import "../PostStyle.css"

export default function PostList() {
	const [post, setPost] = useState([]);
	useEffect(() => {
		postServices.getAll()
			.then(result => setPost(result))
			.catch(err=>{
				console.log(err);
			});
	}, []);
	return (
		<>
				<main className="main">
					<section className="post-list">
						<div className="container">
						
							{post.map(post => (
								<PostListItem key={post._id} {...post} />
							))}
							{post.length === 0 && <h3 className='no-article'>No article yet</h3>}
						</div>
					</section>
				</main>

		</>
	);
}