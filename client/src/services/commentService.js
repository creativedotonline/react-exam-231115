import * as request from "../components/lib/request";

const baseUrl = 'http://localhost:3030/data/comments'

export const getAllPerPost = async (postId) => {
	const query = new URLSearchParams({
		where: `postId="${postId}"`,
		load: `owner=_ownerId:users`,
	})
	const result = await request.get(`${baseUrl}?${query}`);
	
	return result;
}

export const create = async (postId, text) => {
	const newComment = await request.post(baseUrl, {
		postId,
		text,
	});
	return newComment;
}