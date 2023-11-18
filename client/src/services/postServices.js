import {request} from "../components/lib/request"

const baseUrl = 'http://localhost:3030/jsonstore/post-list'

export const getAll = async ()=>{
	const result = await request('GET', baseUrl);
	console.log(result);
	return Object.values(result);
}

export const create = async (postData) => {
	const result = await request('POST', baseUrl,postData);
	
	return result;
}