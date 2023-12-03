
//import SingleTestimonial from "./testimonials/SingleTestimonial";
import { useState, useEffect } from "react";
import PostGridItem from "./post/PostGridItem"
import * as postServices from "../services/postServices"
import SingleTestimonial from "./testimonials/SingleTestimonial";
import "./testimonials/TestimonialsStyle.css"
import HeadingSection from "./header/HeadingSection" 

// const base_url='http://localhost:3030/data/movies';

const PageTestimonial = () => {
	
	const [testimonials, setTestimonials] = useState([]);
	useEffect(() => {
		postServices.getTestimonials()
			.then(result => setTestimonials(result))
			.catch(err=>{
				console.log(err);
			});
	}, []);
	return (
		<>
		<HeadingSection>{<h1>Testimonials</h1>}</HeadingSection>
		
		
				<main className="main">					
					<section className="testimonials-list">
					<div className="container block">
					
					</div>
						<div className="container">
							{testimonials.map((testimonials,index) =>
								<SingleTestimonial key={testimonials.title} id={index+1} {...testimonials}/>
							)}
						</div>
					</section>
				</main>

		</>
	);
}

export default PageTestimonial;