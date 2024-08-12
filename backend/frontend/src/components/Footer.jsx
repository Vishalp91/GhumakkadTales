import { Link } from "react-router-dom";
import Icon from "./Icon";

export default function Footer() {
    return (
        <footer className="bg-white border-y border-red-200">
            <div className="mx-auto w-full max-w-screen-xl py-6 lg:py-8 ">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">

                    <div className="flex justify-center">

                        <i className="flex items-center" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-16">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                            <span className='ghumakkad text-4xl font-serif m-auto'>Ghumakkad<i className='tales text-5xl text-red-700'>Tales</i></span>
                        </i>
                    </div>

                    </div>
                    <div className="sm:w-full lg:w-3/4 flex items-center justify-evenly lg:justify-end gap-12">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-1">
                                    <Link to="/" className="inline-flex hover:underline hover:text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                          <path fill="currentColor" fill-rule="evenodd" strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                        </svg>&nbsp;Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="inline-flex hover:underline hover:text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                          <path fill="currentColor" fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                                        </svg>
                                        &nbsp;About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Connect</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-1">
                                    <Link
                                        to = "https://github.com/Vishalp91"
                                        className="inline-flex hover:underline hover:text-black"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Icon className='fill-black'>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path>
                                        </Icon>&nbsp;Github
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.linkedin.com/in/vishalpawar91/" className="inline-flex hover:underline" target="_blank">
                                        {/* LinkedIn Icon from Tabler.io */}
                                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path stroke="#0077B5" d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                            <path stroke="#0077B5" d="M8 11l0 5" />
                                            <path stroke="#0077B5" d="M8 8l0 .01" />
                                            <path stroke="#0077B5" d="M12 16l0 -5" />
                                            <path stroke="#0077B5" d="M16 16v-3a2 2 0 0 0 -4 0" />
                                        </svg>&nbsp;LinkedIn
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Share</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-1">
                                    <Link to="https://wa.me/?text=Check%20out%20this%20amazing%20website:%20https://ghumakkadtales.onrender.com%20to%20document%20and%20share%20your%20travel%20adventures%20globally" target = '_blank' className="inline-flex hover:underline">
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path stroke = "green" d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                                        <path stroke = "green" d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                                    </svg>
                                    &nbsp;WhatsApp
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.instagram.com/?url=https://ghumakkadtales.onrender.com" target = '_blank' className="inline-flex hover:underline">
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path stroke = "deeppink" d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                        <path stroke = "deeppink" d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                        <path stroke = "deeppink" d="M16.5 7.5l0 .01" />
                                    </svg>&nbsp;Instagram
                                    </Link>
                                </li>
                            </ul>
                        </div>
                
                    </div>
                </div>

                {/* <div className="my-6 border-t border-red-200 "/> */}

                <div className="w-full flex justify-center items-center mt-8">

                    <div className="inline-flex">
                        <p className="font-serif text-lg"><i>By vishal pawar</i>&nbsp;</p>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFD700" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                          <path stroke= "#000000" strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                        </svg>
                    </div>
                </div>
                
            </div>
        </footer>
    );
}
