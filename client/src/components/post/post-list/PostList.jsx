import { useEffect } from 'react';
import * as postServices from "../../../services/postServices"
// import PostListItem from "../post-list-item/PostListItem";
import HeadingSection from "../../header/HeadingSection"
import "../PostStyle.css"

export default function PostList() {
	useEffect(()=>{
		postServices.getAll()
			
	},[]);
	return (
		<>
			<HeadingSection />
			<div className="wrapper">
				<main className="main">
					<section className="post-list">
						<div className="container">
							
						</div>
					</section>
				</main>
			</div>
		</>
	);
}