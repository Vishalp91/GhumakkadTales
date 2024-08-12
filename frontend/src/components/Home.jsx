import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="mx-auto w-full h-full max-w-7xl">
            
            <aside className="w-full h-96 md:h-full sm:h-full flex gap-8 items-center justify-evenly flex-wrap">
                    <div className="mt-8 mb-8">
                        <img className="sm:w-96 w-48" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
                    </div>
                   <div className="">
                        <div className="flex flex-col items-center justify-center">
                        <h2 className="text-4xl font-serif sm:text-5xl text-center">
                            Explore Amazing
                        </h2>
                        <span className="text-4xl sm:text-4xl font-serif mt-2">Travel Adventures</span>

                        <Link
                            className="inline-flex text-white items-center mt-4 px-6 py-3 shadow-lg shadow-pink-600/50 font-medium bg-orange-700 rounded-lg"
                            to="/posts"
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
                            &nbsp; See Posts
                        </Link>
                    </div>
    
                    </div>

            </aside>

            <div className="grid  place-items-center mt-20 sm:mt-20">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl font-serif py-10 font-medium"><i>Share your beautiful memories</i></h1>
        </div>
    );
}
