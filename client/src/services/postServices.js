const baseUrl = 'http://localhost:3030/jsonstore'


export const create = async (postData) => {
	const response = await fetch(`${baseUrl}/post-list`,{
		method:'POST',
		headers:{
			'content-type':'application/json'
		},
		body:JSON.stringify(postData)
	});

	const result = await response.json();
	return result;
}