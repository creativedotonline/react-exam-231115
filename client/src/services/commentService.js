import * as request from "../components/lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/comments'

export const getAllPerPost = async (postId) => {
	const query = new URLSearchParams({
		where: `postId="${postId}"`
	})
	const result = await request.get(`${baseUrl}`);
	//const result = await request.get(`${baseUrl}?${query}`);
	// return Object.values(result);
	return Object.values(result).filter(comment => comment.postId === postId);
	// TO DO: temo solution until migration to collection services
}

export const create = async (postId, username, text, userImg) => {
	const newComment = await request.post(baseUrl, {
		postId,
		username,
		text,
		userImg,
	});
	return newComment;
}