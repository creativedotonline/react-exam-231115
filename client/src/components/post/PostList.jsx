import "./PostStyle.css"
import {Link } from "react-router-dom"
import {useEffect, useState} from 'react';
import * as postService from "../../services/postServices"
import PostListItem from "./post-list-item/PostListItem";
import HeadingSection from "../header/HeadingSection"

export default function PostList() {
	const [post, setPost] = useState([]);
	
	useEffect(()=>{
		postService.getAll()
			.then(result => setPost(result));
	},[]);
	console.log(post);
	return(
		<>
		<HeadingSection />
		<div className="wrapper">
			<main className="main">
				<section className="post-list">
					<div className="container">
						{post.map(post=>(
							<PostListItem key={post._id} {...post} />
							//<PostListItem key={post._id} title={post.title} category={post.category} imageUrl={post.imageUrl} />
						))}
						{post.length===0 && <h3 className="no-articles">No articles yet</h3>}
					</div>
				</section>
			</main>
		</div>
		</>
	);
}