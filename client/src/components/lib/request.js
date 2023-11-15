export const request = async (method, url )=>{
	const response = await fetch(url,{
		method,
	});

	// if(!response.ok){
	// 	throw new Error(' ...')
	// }
	const result = await response.json();
	return result;
};