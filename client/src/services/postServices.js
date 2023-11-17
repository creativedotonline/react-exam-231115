import * as request from "../components/lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/post-list'

export const getAll = async () => {
	const result = await request.get(baseUrl);
	return Object.values(result);
};

export const getOne = async (postId)=>{
	const result = await request.get(`${baseUrl}/${postId}`);
	return result;
};

export const create = async (postData) => {
	const result = await request.post(baseUrl, postData);

	return result;
};