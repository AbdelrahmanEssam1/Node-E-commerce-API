const User = require('./../../Models/user')

const updateUser = async (id, name) => {
    const user_exists = await User.findOne({'_id': id});

    if (!user_exists) throw new Error("User Not Found"); 

    await User.updateOne({ '_id': id }, { 'name': name });
    
    user_exists.name = name;
    user_exists.password = undefined;
    return user_exists;
}

const deleteUser = async (id) => {
    const user_exists = await User.find({'_id': id});

    if (!user_exists) throw new Error("User Not Found"); 

    return await User.deleteOne({'_id': id });
}

const getUser = async (id) => {
    const user_exists = await User.find({'_id': id});

    if (!user_exists) throw new Error("User Not Found"); 

    return user_exists;
};

const getAllUsers = async (n) => {
    return await (User.find().limit(n).select('-password'));
}

module.exports = { updateUser, deleteUser, getUser, getAllUsers}