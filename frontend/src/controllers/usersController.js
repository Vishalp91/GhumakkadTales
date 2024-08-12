
// Login User

const loginUser = async (email, password) => {

    if(!email || !password) {
        throw Error("All fields are required");
    }

    const res = await fetch('/api/users/login', {
        method : "POST",
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({email, password})
    });

    const data = await res.json();

    if(!res.ok) {
        throw Error(data.error)
    }

    localStorage.setItem('token', data.token);
    localStorage.setItem('email', data.email);
    localStorage.setItem('username', data.username);

    return data;
}

//Register User

const registerUser = async (username, email, password) => {

    if(!username || !email || !password) {
        throw Error("All fields are required");
    }

    const res = await fetch('/api/users', {
        method : "POST",
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({username, email, password})
    });

    const data = await res.json();

    if(!res.ok) {
        throw Error(data.error)
    }

    localStorage.setItem('token', data.token);
    localStorage.setItem('email', data.email);
    localStorage.setItem('username', data.username);

    return data;
}

//Get user
const getUser = async (_id) => {

    const res = await fetch(`/api/users/${_id}`);

    const data = await res.json();

    if(!res.ok) {
        throw Error(data.error);
    }

    return data;
}

//Get user through email

const getUsername = async (email) => {

    const res = await fetch(`api/users/email/${email}`);

    const data = await res.json();

    if(!res.ok) {
        throw Error(data.error);
    }

    return data;
}

export {loginUser, registerUser, getUser, getUsername}