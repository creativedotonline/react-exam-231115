import * as request from "../components/lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/comments'

export const getAllPerPost = async (postId) => {
	const result = await request.get(baseUrl);
	return Object.values(result).filter(comment => comment.postId === postId);
}

export const create = async (postId, username, text) => {
	const newComment = await request.post(baseUrl, {
		postId,
		username,
		text,
	});
	return newComment;
}