import { request } from "../components/lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/post-list'

export const getAll = async () => {
	const result = await request('GET',baseUrl);
	return Object.values(result);
};

export const create = async (postData) => {
	const response = await fetch(baseUrl,{
		method:'POST',
		headers:{
			'content-type': 'application/json'
		},
		body: JSON.stringify(postData)
	});
	const result = await response.json();
	return result;
}