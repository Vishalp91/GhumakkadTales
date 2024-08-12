import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/UserContext"
import { getUser } from "../../controllers/usersController";
import { Link } from "react-router-dom";



export default function Post({post, children}) {

    // user user context
    const { user } = useContext(UserContext);

    const [userData, setUserData] = useState({});
    const [username, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        setTimeout(async () => {
            const userD = await getUser(post.user);
            setUserData(userD);
            setUserName(userD.username);
            setUserEmail(userD.email);
        }, 100)
    }, []);


    return (
        <div className="w-full min-h-[500px] font-serif rounded-lg bg-white shadow-2xl shadow-red-500/60  p-4 mb-6">

<div className="flex items-start justify-between">
            
            <h1 className="text-xl inline-flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
            </svg><i>{username}</i></h1>
    
        </div>

            <div className="w-full">

                    {/* Edit and delete features previously were here
                     <div className="flex items-start justify-between">
                        <h1 className="mb-4 text-xl ">@{username}</h1>
                    </div>

                    <div className="h-px w-full bg-gradient-to-r from-orange-50 via-orange-700 to-orange-50 mt-6"></div> */}

                    <div className="w-full flex flex-col items-center justify-center">
                        <h1 className=" text-orange-700 text-2xl text-center first=letter:uppercase mt-2 mb-2">{post.title}</h1>
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-md">{post.location}&nbsp;|&nbsp;{post.country}</p>
                            <p className="text-gray-700 text-sm">{new Date(post.createdAt).toLocaleDateString()}</p>
                        </div>
                    </div>
            </div>
                
            <div className="h-px w-full bg-gradient-to-r from-orange-50 via-orange-700 to-orange-50 mt-6 mb-2"></div>
            
            {/* <div className="flex items-start justify-between">
            
                <h1 className="text-xl inline-flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                </svg><i>{username}</i></h1>
        
            </div> */}
            
            {post.image && <div className="w-full flex justify-center mt-4">
                    <img src={post.image.url}/>
            </div>}

            {post.image && <div className="h-px w-full bg-gradient-to-r from-orange-50 via-orange-700 to-orange-50 mt-6"></div>}

            <p className="mt-4 font-serif text-justify px-2"><i>{post.content}</i></p>

            { userEmail === user.email && <div className="h-px w-full bg-gradient-to-r from-orange-50 via-orange-700 to-orange-50 mt-4 mb-2"></div> }

            {
                userEmail === user.email && <div>{children}</div> 
            }

        </div>
    )
}