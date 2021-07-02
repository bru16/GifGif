import bcrypt from 'bcryptjs'

export const encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);


    return await bcrypt.hash(password, salt);
}

export const comparePassword = async (userPassword, receivedPassword) => {
    return await bcrypt.compare(receivedPassword, userPassword);
}

(async () => {
    const password = await encryptPassword('admin123');

    const newUser = {
        username: 'admin',
        password: password
    }
    users.push(newUser);
    favs[newUser.username] = [];
})()

export const users = []

export const favs = {}

