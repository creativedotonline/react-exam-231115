export const formatDate = (isoDate) => {
	const options = { year: 'numeric', month: 'numeric', day: 'numeric' };

	return new Date(isoDate).toLocaleDateString(undefined, options);
};

export const normalizeName = (name) => name.replace(/ /g, '-').toLowerCase();

export const pathToUrl = (path, params)=>{
	const url = Object.keys(params).reduce((result, param) =>{
		return result.replace(`${param}`, params[param]);
	},[path]);

	return url;
};