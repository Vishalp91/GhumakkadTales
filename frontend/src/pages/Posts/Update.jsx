import { useContext, useState } from "react"
import Alert from "../../components/Alert";
import { useLocation, useNavigate } from "react-router-dom";
import { PostContext } from "../../context/PostContext";
import { updatePost } from "../../controllers/postsController";
import Icon from "../../components/Icon";


export default function Update() {

    //use post context
    const {posts, setPosts} = useContext(PostContext);

    // use navigate hook
    const navigate = useNavigate();

    // use Location hook
    const {state} = useLocation();

    //Error state
    const [error, setError] = useState(null);

    //Form data state
    const [title, setTitle] = useState(state.title);
    const [content, setContent] = useState(state.content);
    const [location, setLocation] = useState(state.location);
    const [country, setCountry] = useState(state.country);
    const [image, setImage] = useState(state.image.url);

    // Handle update
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            // Update the post
            const data = await updatePost(state._id, title, image, content, location, country);
            //update user state
            setPosts([...posts, data]);
            //navigate to dashboard
            navigate('/dashboard');
        }
        catch(error) {
            setError(error.message);
        }
    }

    return (
        <section className="p-4">

            {error && <Alert msg = {error}/>}

            <h1 className="text-3xl text-center text-red-600 mb-10 mt-10">Update your Post</h1>

            <form onSubmit={handleUpdate} encType="multipart/form-data">
            <div className="w-full min-h-[200px] flex flex-col items-center mb-10">
            
            <input
                type="text"
                placeholder = {title}
                value = {title}
                onChange={(e) => {setTitle(e.target.value)}}
                className="lg:w-1/2 w-3/4 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                autoFocus
            />
            <input
                type="file"
                placeholder={state.image.url}
                onChange={(e) => setImage(e.target.files[0])}
                className="lg:w-1/2 w-3/4 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
            {/* {image &&
            <div className="w-60 text-left mt-6">
                    <img src={image} />
            </div>
            } */}
            <textarea 
                    className="lg:w-1/2 w-3/4 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none" 
                    rows = "7"
                    value={content}
                    onChange = {(e) => setContent(e.target.value)}
            >
            {content}
            </textarea>

            <div className="lg:w-1/2 w-3/4 flex items-center justify-evenly gap-1">
            <input
                type="text"
                placeholder= {location}
                value = {location}
                onChange={(e) => {setLocation(e.target.value)}}
                className="lg:w-1/2 w-3/4 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
            <input
                type="text"
                placeholder= {country}
                value = {country}
                onChange={(e) => {setCountry(e.target.value)}}
                className="lg:w-1/2 w-3/4 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
            />
            </div>

            <button className="inline-flex justify-center lg:w-1/2 w-3/4 mt-2 py-3 px-3 rounded-lg bg-orange-700 border border-gray-400 text-white font-semibold focus:border-orange-500 focus:outline-none">
                <Icon className='fill-white'>
                    <path d="M15.673 3.913a3.121 3.121 0 1 1 4.414 4.414l-5.937 5.937a5 5 0 0 1-2.828 1.415l-2.18.31a1 1 0 0 1-1.132-1.13l.311-2.18A5 5 0 0 1 9.736 9.85zm3 1.414a1.12 1.12 0 0 0-1.586 0l-5.937 5.937a3 3 0 0 0-.849 1.697l-.123.86.86-.122a3 3 0 0 0 1.698-.849l5.937-5.937a1.12 1.12 0 0 0 0-1.586M11 4A1 1 0 0 1 10 5c-.998 0-1.702.008-2.253.06-.54.052-.862.141-1.109.267a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216C5.001 8.471 5 9.264 5 10.4v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h3.2c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.126-.247.215-.569.266-1.108.053-.552.06-1.256.06-2.255a1 1 0 1 1 2 .002c0 .978-.006 1.78-.069 2.442-.064.673-.192 1.27-.475 1.827a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C15.6 21 14.727 21 13.643 21h-3.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.233-.487-1.961C3 15.6 3 14.727 3 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.729.185-1.369.487-1.961A5 5 0 0 1 5.73 3.545c.556-.284 1.154-.411 1.827-.475C8.22 3.007 9.021 3 10 3A1 1 0 0 1 11 4"></path>                            
                </Icon>
                &nbsp; Update Post
            </button>
            </div>
            </form>
        </section>
    )
}