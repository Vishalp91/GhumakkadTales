

//Get all posts

const getPosts = async () => {

    const res = await fetch('/api/posts');

    const data = await res.json();

    if(!res.ok) {
        throw Error(data.error)
    }

    return data;
}

// Get user posts

const getUserPosts = async () => {

    const res = await fetch('api/posts/user', {
        headers : {
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
        }
    });

    const data = await res.json();

    if(!res.ok) {
        throw Error(data.error);
    }

    return data;
}

// create a post
const createPost = async (title, image, content, location, country) => {

    if(!title && !content && !location && !country) {
        throw Error("All fields are required");
    }
    if(!title) {
        throw Error("Title is required");
    }
    if(!content) {
        throw Error("Please share your memory");
    }
    if(!location) {
        throw Error("Please share location name");
    }
    if(!country) {
        throw Error("Please share country name");
    }

    if(content.length >= 3000) {
        throw Error("please type a quite short story");
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', image);
    formData.append('content', content);
    formData.append('location', location);
    formData.append('country', country);

    const res = await fetch('/api/posts', {
        method : "POST",
        headers : {
            // "Content-Type" : "application/json",
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
        },
        // body : JSON.stringify({title, content, image, location, country})
        body : formData
    });

    const data = await res.json();

    if(!res.ok) {
        throw Error(data.error);
    }

    return data;
    
}

//Delete post
const deletePost = async (_id) => {

    const res = await fetch(`/api/posts/${_id}`, {
        method : "DELETE",
        headers : {
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
        }
    });

    const data = await res.json();

    if(!res.ok) {
        throw Error(data.error);
    }

    return data;
}

// Update post
const updatePost = async (_id, title, image, content, location, country) => {

    if(!title && !content && !location && !country) {
        throw Error("All fields are required");
    }
    if(!title) {
        throw Error("Title is required");
    }
    if(!content) {
        throw Error("Please share your memory");
    }
    if(!location) {
        throw Error("Please share location name");
    }
    if(!country) {
        throw Error("Please share country name");
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', image);
    formData.append('content', content);
    formData.append('location', location);
    formData.append('country', country);

    const res = await fetch(`/api/posts/${_id}`, {
        method : "PATCH",
        headers : {
            // "Content-Type" : "application/json",
            "Authorization" : `Bearer ${localStorage.getItem("token")}`
        },
        // body : JSON.stringify({title, content, location, country})
        body : formData
    });

    const data = await res.json();

    if(!res.ok) {
        throw Error(data.error);
    }

    return data;    

}

export {
    getPosts,
    getUserPosts,
    createPost,
    deletePost,
    updatePost
}