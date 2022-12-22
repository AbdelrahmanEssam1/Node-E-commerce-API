const register = async (user) => {
    //check if user exists before adding him
    const user_exists = await User.findOne({ email: user.email });
    // console.log(user_exists);
    if (!user_exists) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        const new_user = new User(user);
        await new_user.save();
        new_user.password = undefined;
        return new_user;
    }

    throw new Error("email already exists");
}

const login = async (user) => {
    //check if user exists
    const existing_user = await User.findOne({ email: user.email });
    // console.log(existing_user);
    if (!existing_user) {
        throw new Error("User doesn't exist!");
    }
    if (!bcrypt.compareSync(user.password, existing_user.password)) {
        throw new Error("Login failed");
    }
    existing_user.password = undefined;
    return existing_user;
}