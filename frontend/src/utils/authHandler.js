import { API } from '@api/client.js'

export const postRegister = async (name, email, password) => {
    try {
        const result = await API.post('auth/register', {
            name, email, password
        })
        console.log(result);
        return result.data.user
    } catch (error) {
        const message = error.response?.data?.message;
        console.error("Something went wrong:", message);
        throw new Error(message);
    }
}




export const postLogin = async (email, password) => {
    try {
        const result = await API.post('auth/login', { email, password });
        console.log(result.data);
        return result.data.user
    } catch (error) {
        const message = error.response?.data?.message;
        console.error("Something went wrong:", message);
        throw new Error(message);
    }
};