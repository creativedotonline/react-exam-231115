import * as request from "../components/lib/request"

const baseUrl = 'http://localhost:3030/data/userlist'

export const getAll = async ()=>{
	const result = await request.get(`${baseUrl}`);
	return result;
}

export const getOne = async (userId) =>{
	const result = await request.get(`${baseUrl}/${userId}`);
	return result;
}

export const create = async (userData) => {
	const result = await request.user(baseUrl,userData);
	console.log(result);
	return result;
}

export const edit = async (userId, userData) => {
	const result = await request.put(`${baseUrl}/${userId}`, userData);
	
	return result;
}


export const remove = async (userId)=> request.remove(`${baseUrl}/${userId}`);

