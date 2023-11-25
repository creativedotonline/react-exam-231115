import * as request from "../components/lib/request";

const baseUrl = 'http://localhost:3030/data/comments'

export const getAllPerPost = async (postId) => {
	const query = new URLSearchParams({
		where: `postId="${postId}"`
	})
	const result = await request.get(`${baseUrl}?${query}`);
	
	return result;
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