const buildOptions = (data) => {
	const options = {};

	if (data) {
		options.bodys = JSON.stringify(data);
		options.headers = {
			'content-type': 'application/json'
		};
	}

	return options;
};

const request = async (method, url,data) => {
	const response = await fetch(url, {
		...buildOptions(data),
		method,
	});

	// if(!response.ok){
	// 	throw new Error(' ...')
	// }
	const result = await response.json();
	return result;
};

export const get = request.bind(null,'GET');
export const post = request.bind(null,'POST');
export const put = request.bind(null,'PUT');
export const del = request.bind(null,'DELETE');
export const patch = request.bind(null,'PATCH');