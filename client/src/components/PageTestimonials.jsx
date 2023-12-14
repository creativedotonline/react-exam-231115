
//import SingleTestimonial from "./testimonials/SingleTestimonial";
import { useState, useEffect } from "react";
//import PostGridItem from "./post/PostGridItem"
//import * as postServices from "../services/postServices"
import * as testimonialService from "../services/testimonialService"
import HeadingSection from "./header/HeadingSection"

import "./testimonials/TestimonialsStyle.css"
import TestimonialsList from "./testimonials/TestimonialsList";
//import HeadingSection from "./header/HeadingSection" 

// const base_url='http://localhost:3030/data/testimonials';

const PageTestimonial = () => {
	
	// const [testimonials, setTestimonials] = useState([]);
	// useEffect(() => {
	// 	testimonialService.getTestimonials()
	// 		.then(result => setTestimonials(result))
	// 		.catch(err=>{
	// 			console.log(err);
	// 		});
	// }, []);
	return (
		<>
		{/* <section className="testimonials-list">
			<div className="container block">
				<h2>What Our Laydies thinks</h2>
			</div>
			<div className="container block">
			
			</div>
				<div className="container">
					{testimonials.map((testimonials,index) =>
						<SingleTestimonial key={testimonials._id} id={index+1} {...testimonials}/>
					)}
				</div>
		</section> */}
        <HeadingSection heading='Testimonials' />
		<TestimonialsList />
		</>
	);
}

export default PageTestimonial;