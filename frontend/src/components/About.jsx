import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";


export default function About() {

    const { user } = useContext(UserContext);


    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img className="rounded-md"
                            // src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            src="https://images.pexels.com/photos/906531/pexels-photo-906531.jpeg?auto=compress&cs=tinysrgb&w=600"
                            // src = "https://th.bing.com/th/id/OIP.evxg710u6z2CGEvDsMHZigHaEI?w=300&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12 text-center">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Explore, document, and share your travel adventures globally.
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Welcome to <span className='text-black text-lg font-serif'><i>Ghumakkad</i><i className='text-xl text-red-700'>Tales</i></span> , where your adventures come to life! 
                        Document your journeys, share captivating stories, and inspire fellow travelers 
                        with vivid photos and detailed experiences from around the world.
                        </p>
                        <p className="mt-4 text-gray-600">
                        Join our community of passionate explorers. Discover new destinations, 
                        and make unforgettable memories as you travel. Your next adventure awaits!
                        </p>
                        
                        {!user.email && <><p className="mt-4 text-gray-600">
                            What are you waiting for? start creating memories with us
                        </p>
                        <Link
                            className="inline-flex text-white items-center mt-4 px-6 py-3 shadow-lg shadow-pink-600/50 font-medium bg-orange-700 rounded-lg"
                            to="/dashboard"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Create Posts
                        </Link></>
                        }

                        {user.email && <><p className="mt-4 text-gray-600">
                            What are you waiting for? start creating memories with us
                        </p>
                        <Link
                            className="inline-flex text-white items-center mt-4 px-6 py-3 shadow-lg shadow-pink-600/50 font-medium bg-orange-700 rounded-lg"
                            to="/create"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Create Posts
                        </Link></>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}