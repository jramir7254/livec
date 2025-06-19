const db = require('@database/database');

const getUser = async (email, password) => {
    try {
        await db.read();
        const user = db.data.users.find(u => u.email === email);

        console.log("user:", user)

        if (!user) {
            throw new Error("User not found")
        }

        if (password != user.password) {
            throw new Error("Wrong password")
        }

        return user;
    } catch (error) {
        console.error(error)
        throw error
    }
}

const insertUser = async (name, email, password) => {
    try {
        const randomFourDigit = Math.floor(1000 + Math.random() * 9000);

        db.data.users.push({ name, email, password, role: `CM-${randomFourDigit}` })
        await db.write()

        await db.read();
        const user = db.data.users.find(u => u.email === email);

        return user;
    } catch (error) {
        console.error(error)
        throw error
    }
}


const userExists = async (email) => {
    try {
        await db.read();
        const user = db.data.users.find(u => u.email === email);
        console.log("Does user exist:", user != null, user)
        return user != null;

    } catch (error) {
        console.error(error)
        throw error
    }
}

module.exports = { getUser, userExists, insertUser }