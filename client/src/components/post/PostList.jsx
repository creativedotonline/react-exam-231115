import "./PostStyle.css"
import {Link } from "react-router-dom"
import {useEffect, useState} from 'react';
import * as postService from "../../services/postServices"

export default function PostList() {
	const [post, setPost] = useState([]);
	
	useEffect(()=>{
		postService.getAll()
			.then(result => setPost(result));
	},[]);
	console.log(post);
	return(
		<>
		<div className="single-post-grid" id=''>
			<div className="single-post-grid-image">
				<Link to='/'>
					<img className="single-post-grid-img-top" to="https://placehold.co/600x400" />
				</Link>
			</div>
			<div className="single-post-grid-body">
				<div className="single-post-grid-title">
					<h3>Name</h3>
				</div>
				<div className="single-post-grid-text">	
					dssdvsdxfv c
				</div>
				<Link as={Link} to='/' className="btn btn-pink-gradient">Read More</Link>
			</div>
		</div>
		</>
	);
}