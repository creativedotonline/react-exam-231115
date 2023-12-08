//const baseUrl = 'http://localhost:3030/jsonstore/users';
const baseUrl = 'http://localhost:3030/data/userlist';

export const getAll = async ()=> { // get all users, differsent services for data
        const response = await fetch(baseUrl);
        const result = await response.json();

        const data = Object.values(result);

        return data;
}
export const getOne = async (userId) => {
    const response = await fetch(`${baseUrl}/${userId}`);
    const result = await response.json();

    return result;
}
 

export const create = async (data) => {
    const body = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        imageUrl: data.imageUrl,
        phoneNumber: data.phoneNumber,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
	
    const response = await fetch(baseUrl, {
        method:"POST",
        headers: {
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify(body),
    })

    const result= await response.json();
    console.log(result);

    return result;
};
export const edit = async (userId, userData) => {
	const result = await request.put(`${baseUrl}/${userId}`, userData);
	
	return result;
}


export const remove = async (userId)=> request.remove(`${baseUrl}/${userId}`);
// export const remove = async (userId) => {
//     const response = await fetch(`${baseUrl}/$${userId}`,{
//         method: "DELETE"
//     })
//     const result = await response.json();
//     return result;
// }