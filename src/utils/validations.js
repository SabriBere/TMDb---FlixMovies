const email = (value) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    return regex.test(value);
}

const username = (value) => {
    return value.length > 2;
}

const password = (value) => {
    return value.length > 2;
}

module.exports = { email, username, password }
