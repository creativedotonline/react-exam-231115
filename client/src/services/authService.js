import * as request from "../components/lib/request"

const baseUrl = "http://localhost:3030/users"; 
//const baseUrl = "http://localhost:3030/data/userlist"; 

export const login = async (email, password) => {
	const result = await request.post(`${baseUrl}/login`, {
		email,
		password,
	});
	return result;
};

export const register = async (email, password) => request.post(`${baseUrl}/register`, {
	email,
	password
});

export const logout =()=>request.get(`${baseUrl}/logout`);

// export const login = async (email, password) => {
// 	const result = await request.post(`${baseUrl}/login`, {
// 		email,
// 		password,
// 	});
// 	return result;
// };

// export const register = async (email, password, username,userimg, userphone) => request.post(`${baseUrl}/register`, {
// 	email,
// 	password,
// 	username,
// 	userimg,
// 	userphone,
// });