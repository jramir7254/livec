const { getUser, userExists, insertUser } = require('@models/userModel')

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Call made to login");

        const user = await getUser(email, password)

        return res.status(200).json({ success: true, user });

    } catch (error) {
        console.error(error)
        return res.status(401).json({ success: false, message: 'Either username or password are incorrect' });
    }
}


const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log("body", req.body)
        const doesUserExist = await userExists(email)

        if (doesUserExist) {
            console.log("User already exists");
            return res.status(409).json({ success: false, message: 'User already exists' });
        }

        const insertedUser = await insertUser(name, email, password)
        return res.status(200).json({ success: true, user: {...insertedUser}});

    } catch (error) {
        console.error(error)

    }
}

module.exports = { login, register }