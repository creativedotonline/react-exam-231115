import * as request from "../components/lib/request"

const baseUrl = 'http://localhost:3030/data/testimonials'

export const getTestimonials = async () =>{
	const result = await request.get(`${baseUrl}`);
	return result;
}

export const getLatest = async () =>{
	const query = new URLSearchParams({
		// sortBy:`_createdOn desc`,
		offset:0,
		pageSize:4,
	});
	const result = await request.get(`${baseUrl}?${query}`);
	return result;
}