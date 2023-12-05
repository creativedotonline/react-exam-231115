
//import SingleTestimonial from "./testimonials/SingleTestimonial";
import { useState, useEffect } from "react";
import * as testimonialService from "../../services/testimonialService"

import TestimonialDetails from "./TestimonialDetails";
import "./TestimonialsStyle.css"

// const base_url='http://localhost:3030/data/testimonials';

const ListTestimonial = () => {	
	const [testimonials, setTestimonials] = useState([]);
	useEffect(() => {
		testimonialService.getTestimonials()
			.then(result => setTestimonials(result))
			.catch(err=>{
				console.log(err);
			});
	}, []);
	return (
		<>
		<section className="testimonials-list layout_padding">
			
		<div className="container block">
				<h2 className="section-heading">What Our Laydies thinks</h2>
			</div>
				<div className="container">
					{testimonials.map((testimonials,index) =>
						<TestimonialDetails key={testimonials._id} id={index+1} {...testimonials}/>
					)}
				</div>
		</section>
		</>
	);
}

export default ListTestimonial;