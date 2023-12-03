import * as request from "../components/lib/request"

const baseUrl = 'http://localhost:3030/data/testimonials'

export const getTestimonials = async () =>{
	const result = await request.get(`${baseUrl}`);
	return result;
}
