import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { deletePost, getPosts } from "../../controllers/postsController"
import { PostContext } from "../../context/PostContext";
import Post from "./Post";
import { UserContext } from "../../context/UserContext";
import Success from "../../components/Success";
import Alert from "../../components/Alert";
import Icon from "../../components/Icon";


export default function Posts() {

    // grab posts from global posts context
    const {posts, setPosts} = useContext(PostContext);

    // grab user form user context
    const { user, setUser } = useContext(UserContext);

    //Error state
    const [error, setError] = useState('');

    //Success state
    const [success, setSuccess] = useState('');

    useEffect(() => {

        setTimeout(async () => {
            //Grab posts from database
            const data = await getPosts();
            //update posts state in the context
            setPosts(data);

        }, 1)


    }, []);

    // Handle delete
    const handleDelete = async (_id) => {
        
        if(confirm("This post will be deleted forever")) {
            try {
                //Delete the post
                const data = await deletePost(_id);
                setSuccess(data.success);
            }
            catch(error) {
                setError(error.message);
            }
    
            const newUserPosts = user.posts.filter((post) => post._id !== _id);
            const newPosts = posts.filter((post) => post._id !== _id);
            setUser({...user, posts : newUserPosts});
            setPosts(newPosts);
        }
    }

    //share button
    const [share, setShare] = useState(false);

    //toggle share 
    const toggleShare = () => {
        setShare(!share);
    }
    

    return (
        <div className="p-4 bg-red-200 mt-10">
            {success && <Success msg = {success}/>}
            {error && <Alert  msg = {error}/>}

            <h1 className="text-3xl text-center text-red-600 mb-10">Latest Posts</h1>

            <div className=" m-auto post">
                {posts && posts.map((post) => (

                    <div key = {post._id}>
                    <Post post = {post}>
                        <div className="flex items-center justify-evenly">

                            <Link to = "/update" className="inline-flex text-black text-md font-medium hover:bg-red-200 p-1 rounded-md" state = {post}>
                            <svg
                                className="fill-orange-700"
                                // fill="maroon"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                            <path  fill="red" fill-rule="evenodd" d="M13.293 4.293a4.536 4.536 0 1 1 6.414 6.414l-1 1-7.094 7.094A5 5 0 0 1 8.9 20.197l-4.736.79a1 1 0 0 1-1.15-1.151l.789-4.736a5 5 0 0 1 1.396-2.713zM13 7.414l-6.386 6.387a3 3 0 0 0-.838 1.628l-.56 3.355 3.355-.56a3 3 0 0 0 1.628-.837L16.586 11zm5 2.172L14.414 6l.293-.293a2.536 2.536 0 0 1 3.586 3.586z" clip-rule="evenodd"></path>
                            </svg>&nbsp; Edit

                            </Link>
                            <button onClick={() => handleDelete(post._id)} className="inline-flex text-black hover:bg-slate-200 p-1 rounded-md">
                            <svg
                                fill="black"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                            <path fill="currentColor" fill-rule="evenodd" d="M10.556 4a1 1 0 0 0-.97.751l-.292 1.14h5.421l-.293-1.14A1 1 0 0 0 13.453 4zm6.224 1.892-.421-1.639A3 3 0 0 0 13.453 2h-2.897A3 3 0 0 0 7.65 4.253l-.421 1.639H4a1 1 0 1 0 0 2h.1l1.215 11.425A3 3 0 0 0 8.3 22H15.7a3 3 0 0 0 2.984-2.683l1.214-11.425H20a1 1 0 1 0 0-2zm1.108 2H6.112l1.192 11.214A1 1 0 0 0 8.3 20H15.7a1 1 0 0 0 .995-.894zM10 10a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1" clip-rule="evenodd"></path>
                            </svg> &nbsp; Delete
                            </button>
                            
                        </div>
                    </Post>
                </div>

                ))}

                <div className="w-full flex items-center justify-center">
                {user.email && <><p className="mt-4 text-gray-600">
                            
                        </p>
                        <Link
                            className="inline-flex text-white items-center mt-4 px-6 py-3 shadow-lg shadow-pink-600/50 font-medium bg-orange-700 rounded-lg"
                            to="/create"
                        >
                            <Icon className='fill-white'>
                                <path d="M15.673 3.913a3.121 3.121 0 1 1 4.414 4.414l-5.937 5.937a5 5 0 0 1-2.828 1.415l-2.18.31a1 1 0 0 1-1.132-1.13l.311-2.18A5 5 0 0 1 9.736 9.85zm3 1.414a1.12 1.12 0 0 0-1.586 0l-5.937 5.937a3 3 0 0 0-.849 1.697l-.123.86.86-.122a3 3 0 0 0 1.698-.849l5.937-5.937a1.12 1.12 0 0 0 0-1.586M11 4A1 1 0 0 1 10 5c-.998 0-1.702.008-2.253.06-.54.052-.862.141-1.109.267a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216C5.001 8.471 5 9.264 5 10.4v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h3.2c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.126-.247.215-.569.266-1.108.053-.552.06-1.256.06-2.255a1 1 0 1 1 2 .002c0 .978-.006 1.78-.069 2.442-.064.673-.192 1.27-.475 1.827a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C15.6 21 14.727 21 13.643 21h-3.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.233-.487-1.961C3 15.6 3 14.727 3 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.729.185-1.369.487-1.961A5 5 0 0 1 5.73 3.545c.556-.284 1.154-.411 1.827-.475C8.22 3.007 9.021 3 10 3A1 1 0 0 1 11 4"></path>                            
                            </Icon>
                            &nbsp; Add Posts
                        </Link></>
                }
                {!user.email && <><p className="mt-4 text-gray-600">
                            
                        </p>
                        <Link
                            className="inline-flex text-white items-center mt-4 px-6 py-3 shadow-lg shadow-pink-600/50 font-medium bg-orange-700 rounded-lg"
                            to="/login"
                        >
                            <Icon className = 'fill-white'>
                                <path d="M15.673 3.913a3.121 3.121 0 1 1 4.414 4.414l-5.937 5.937a5 5 0 0 1-2.828 1.415l-2.18.31a1 1 0 0 1-1.132-1.13l.311-2.18A5 5 0 0 1 9.736 9.85zm3 1.414a1.12 1.12 0 0 0-1.586 0l-5.937 5.937a3 3 0 0 0-.849 1.697l-.123.86.86-.122a3 3 0 0 0 1.698-.849l5.937-5.937a1.12 1.12 0 0 0 0-1.586M11 4A1 1 0 0 1 10 5c-.998 0-1.702.008-2.253.06-.54.052-.862.141-1.109.267a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216C5.001 8.471 5 9.264 5 10.4v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h3.2c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.126-.247.215-.569.266-1.108.053-.552.06-1.256.06-2.255a1 1 0 1 1 2 .002c0 .978-.006 1.78-.069 2.442-.064.673-.192 1.27-.475 1.827a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C15.6 21 14.727 21 13.643 21h-3.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.233-.487-1.961C3 15.6 3 14.727 3 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.729.185-1.369.487-1.961A5 5 0 0 1 5.73 3.545c.556-.284 1.154-.411 1.827-.475C8.22 3.007 9.021 3 10 3A1 1 0 0 1 11 4"></path>                            
                            </Icon>
                            &nbsp; Add Posts
                        </Link></>
                    }
                    </div>

                
            </div>
        </div>

    )
}
