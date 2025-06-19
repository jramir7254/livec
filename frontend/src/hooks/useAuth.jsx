import {useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin, postRegister } from '@utils/authHandler.js'
import { UserContext } from '@context/UserProvider'


export default function useAuth() {
    const [message, setMessage] = useState('')
    const { handleUser, setUser } = useContext(UserContext)
    const navigate = useNavigate();


    const login = async ({ email, password }) => {
        try {

            const user = await postLogin(email, password);

            if (user) {
                console.log("In hook user true:", user)
                await handleUser(user);
                navigate('/profile')
            }

        } catch (error) {
            setMessage(error.message)
            console.error("Error in hook call:", error.message)
        }
    }

    
    const register = async ({ name, email, password }) => {
        try {
            console.log(name, email, password)
            const user = await postRegister(name, email, password);

            if (user) {
                console.log("In hook user true:", user)
                handleUser(user);
                navigate('/profile')
            }

        } catch (error) {
            setMessage(error.message)
            console.error("Error in hook call:", error.message)
        }
    }


    const logout = () => {
        sessionStorage.removeItem('user')
        setUser(null)
        navigate('/')
    }


    return { register, login, logout, message, setMessage }
}