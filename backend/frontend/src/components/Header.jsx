import {Link, NavLink, useNavigate} from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import {UserContext} from '../context/UserContext';
import Icon from './Icon';

export default function Header() {

    //use user context
    const { user, setUser} = useContext(UserContext);
    
    // use use navigate hook
    const navigate = useNavigate();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    }

    const handleLogout = () => {
        if(confirm('Confirm Logout')) {
          setUser({username : null, email : null, posts : []});
          localStorage.removeItem('username');
          localStorage.removeItem('email');
          localStorage.removeItem('token');
          navigate('/');
        }
    }


    return (
        <header className="shadow-lg shadow-red-300/30 sticky z-50 top-0">
        
            <nav className="bg-white border-gray-300 lg:px-2 py-2.5">
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-1">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <button
                      type="button"
                      className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      aria-controls="mobile-menu"
                      aria-expanded={isMobileMenuOpen}
                      onClick={toggleMobileMenu}
                    >
                      <span className="absolute -inset-0.5"></span>
                      <span className="sr-only">Open main menu</span>
                      <svg
                        className={`h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                      </svg>
                      <svg
                        className={`h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center">

                      <div className='inline-flex'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                          </svg>
                      </div>

                      <i><span className='text-xl font-serif'>Ghumakkad<i className='text-2xl text-red-700'>Tales</i></span></i>
                    </div>

                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4">
                        <NavLink to="/" className= {({isActive}) => `${isActive ? "text-orange-700" : "text-gray-700"} rounded-md px-3 py-2 text-md font-medium text-black hover:bg-red-200`} aria-current="page">Home</NavLink>
                        <NavLink to="/about" className= {({isActive}) => `${isActive ? "text-orange-700" : "text-gray-700"} rounded-md px-3 py-2 text-md font-medium text-black hover:bg-red-200`}>About</NavLink>
                        <NavLink to="/posts" className= {({isActive}) => `${isActive ? "text-orange-700" : "text-gray-700"} rounded-md px-3 py-2 text-md font-medium text-black hover:bg-red-200`}>Posts</NavLink>
                        {/* <NavLink to="create" className= {({isActive}) => `${isActive ? "text-orange-700" : "text-gray-700"} rounded-md px-3 py-2 text-md font-medium text-black hover:bg-red-200`}>Add Post</NavLink> */}
                        {user.email &&
                        (<>
                          <NavLink to="/dashboard" className= {({isActive}) => `${isActive ? "text-orange-700" : "text-gray-700"} dashboard rounded-md px-3 py-2 text-md font-medium text-black hover:bg-red-200`}>Dashboard</NavLink>
                          {/* <NavLink to="create" className= {({isActive}) => `${isActive ? "text-orange-700" : "text-gray-700"} rounded-md px-3 py-2 text-md font-medium text-black hover:bg-red-200`}>Add Post</NavLink> */}
                        </>)
                        }

                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  
                  {!user.email &&
                  <Link to = '/login' title = 'Add Post' className="add-post relative rounded-full bg-gray-800 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </Link>
                  }
                  {user.email &&
                  <Link to = '/create' title = 'Add Post' className="add-post relative rounded-full bg-gray-800 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </Link>
                  }

                    {/* Profile dropdown */}
                    <div className="relative ml-3">
                      <div>
                        <button
                          type="button"
                          className="relative flex rounded-md bg-white text-2xl hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-700"
                          id="user-menu-button"
                          aria-expanded="false"
                          aria-haspopup="true"
                          onClick={toggleProfileDropdown}
                        >
                          {/* <span className="absolute -inset-1.5"></span> */}
                          {/* <span className="sr-only">Open user menu</span> */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                        </button>
                      </div>

                      {/* Dropdown menu */}
                  
                      <div
                        className={`absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                          isProfileDropdownOpen ? "block" : 'hidden'
                        }`}
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu-button"
                        tabIndex="-1"
                      >
                      {!user.email ?
                      (<div>
                        <Link to = "/login" className="inline-flex px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">
                          <Icon className='fill-gray-700 rounded-md hover:bg-gray-100'>
                          <path fill="currentColor" fill-rule="evenodd" d="M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7M10.968 14.002a1 1 0 0 1-.719 1.218C7.467 15.937 5.5 18.29 5.5 21a1 1 0 1 1-2 0c0-3.729 2.69-6.8 6.25-7.717a1 1 0 0 1 1.218.72" clip-rule="evenodd"></path>
                          <path fill="currentColor" fill-rule="evenodd" d="M17.25 15.625a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0M21.75 15.625a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0M21.75 20.125a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0M17.25 20.125a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0"></path>  
                          </Icon>
                          &nbsp; Dashboard
                        </Link>

                        <Link to = "/register" className="inline-flex px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">
                        {/* Svg icons from Heroicons.com */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                        </svg> &nbsp; Register
                        </Link>

                        <Link to = "/login" className="inline-flex px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                        </svg> &nbsp; Login
                        </Link>
                      </div>) : (
                        <div className='flex flex-col items-start justify-center'>
                        <p className='w-full text-center mb-2 border-b border-red-300 text-center font-serif p-1'>@<i>{user.username}</i></p>
                        <Link to = "/dashboard" className="inline-flex px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">
                          <Icon className='fill-gray-700 rounded-md hover:bg-gray-100'>
                          <path fill="currentColor" fill-rule="evenodd" d="M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7M10.968 14.002a1 1 0 0 1-.719 1.218C7.467 15.937 5.5 18.29 5.5 21a1 1 0 1 1-2 0c0-3.729 2.69-6.8 6.25-7.717a1 1 0 0 1 1.218.72" clip-rule="evenodd"></path>
                          <path fill="currentColor" fill-rule="evenodd" d="M17.25 15.625a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0M21.75 15.625a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0M21.75 20.125a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0M17.25 20.125a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0"></path>  
                          </Icon>
                          &nbsp; Dashboard
                        </Link>
                        <Link to = "/create" className="inline-flex px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">
                          <Icon className='fill-gray-700 rounded-md hover:bg-gray-100 '> 
                            <path d="M15.673 3.913a3.121 3.121 0 1 1 4.414 4.414l-5.937 5.937a5 5 0 0 1-2.828 1.415l-2.18.31a1 1 0 0 1-1.132-1.13l.311-2.18A5 5 0 0 1 9.736 9.85zm3 1.414a1.12 1.12 0 0 0-1.586 0l-5.937 5.937a3 3 0 0 0-.849 1.697l-.123.86.86-.122a3 3 0 0 0 1.698-.849l5.937-5.937a1.12 1.12 0 0 0 0-1.586M11 4A1 1 0 0 1 10 5c-.998 0-1.702.008-2.253.06-.54.052-.862.141-1.109.267a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216C5.001 8.471 5 9.264 5 10.4v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h3.2c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.126-.247.215-.569.266-1.108.053-.552.06-1.256.06-2.255a1 1 0 1 1 2 .002c0 .978-.006 1.78-.069 2.442-.064.673-.192 1.27-.475 1.827a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C15.6 21 14.727 21 13.643 21h-3.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.233-.487-1.961C3 15.6 3 14.727 3 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.729.185-1.369.487-1.961A5 5 0 0 1 5.73 3.545c.556-.284 1.154-.411 1.827-.475C8.22 3.007 9.021 3 10 3A1 1 0 0 1 11 4"></path>                            
                          </Icon>&nbsp; Create Post
                        </Link>

                        <p className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">
                          <button onClick={handleLogout} className='inline-flex'>
                          <Icon className='fill-gray-700 rounded-md hover:bg-gray-100'>
                          <path fill-rule="evenodd" d="M6 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4a1 1 0 1 1 0 2H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h4a1 1 0 1 1 0 2zm9.293 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L17.586 13H11a1 1 0 1 1 0-2h6.586l-2.293-2.293a1 1 0 0 1 0-1.414" clip-rule="evenodd"></path>
                          </Icon>&nbsp; Logout
                          </button>
                        </p>
                        </div>)
                      }
                      
                      </div>
    
                    </div>
                  </div>
                </div>
              </div>
                    
              {/* Mobile menu */}
              <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                <NavLink to="/" className={({isActive}) => `${isActive ? "bg-orange-700 text-white" : "text-gray-900 hover:bg-red-200"} w-full inline-flex rounded-md px-3 py-2 text-base font-medium font-medium`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path fill="currentColor" fill-rule="evenodd" strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>&nbsp;Home
                </NavLink>
                <NavLink to="/about" className={({isActive}) => `${isActive ? "bg-orange-700 text-white" : "text-gray-900 hover:bg-red-200 "} w-full inline-flex rounded-md px-3 py-2 text-base font-medium`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fill="currentColor" fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                  </svg>
                  &nbsp;About
                </NavLink>
                <NavLink to="/posts" className={({isActive}) => `${isActive ? "bg-orange-700 text-white" : "text-gray-900 hover:bg-red-200 "} w-full inline-flex rounded-md px-3 py-2 text-base font-medium`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path fill="currentColor" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                  </svg>&nbsp;Posts
                </NavLink>
                <NavLink to="/create" className={({isActive}) => `${isActive ? "bg-orange-700 text-white" : "text-gray-900 hover:bg-red-200 "} w-full inline-flex rounded-md px-3 py-2 text-base font-medium`}>
                    <Icon className='fill-white'>
                      <path fill="currentColor" fill-rule="evenodd" d="M15.673 3.913a3.121 3.121 0 1 1 4.414 4.414l-5.937 5.937a5 5 0 0 1-2.828 1.415l-2.18.31a1 1 0 0 1-1.132-1.13l.311-2.18A5 5 0 0 1 9.736 9.85zm3 1.414a1.12 1.12 0 0 0-1.586 0l-5.937 5.937a3 3 0 0 0-.849 1.697l-.123.86.86-.122a3 3 0 0 0 1.698-.849l5.937-5.937a1.12 1.12 0 0 0 0-1.586M11 4A1 1 0 0 1 10 5c-.998 0-1.702.008-2.253.06-.54.052-.862.141-1.109.267a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216C5.001 8.471 5 9.264 5 10.4v3.2c0 1.137 0 1.929.051 2.546.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276.617.05 1.41.051 2.546.051h3.2c1.137 0 1.929 0 2.546-.051.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.126-.247.215-.569.266-1.108.053-.552.06-1.256.06-2.255a1 1 0 1 1 2 .002c0 .978-.006 1.78-.069 2.442-.064.673-.192 1.27-.475 1.827a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C15.6 21 14.727 21 13.643 21h-3.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.233-.487-1.961C3 15.6 3 14.727 3 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.729.185-1.369.487-1.961A5 5 0 0 1 5.73 3.545c.556-.284 1.154-.411 1.827-.475C8.22 3.007 9.021 3 10 3A1 1 0 0 1 11 4"></path>                            
                    </Icon>&nbsp; Add Post
                </NavLink>
                {user.email &&
                  <NavLink to="/dashboard" className= {({isActive}) => `${isActive ? "bg-orange-700 text-white" : "text-gray-900 hover:bg-red-200 "} w-full inline-flex rounded-md px-3 py-2 text-base font-medium`}>
                    <Icon className='fill-white'>
                          <path fill="currentColor" fill-rule="evenodd" d="M12 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7M10.968 14.002a1 1 0 0 1-.719 1.218C7.467 15.937 5.5 18.29 5.5 21a1 1 0 1 1-2 0c0-3.729 2.69-6.8 6.25-7.717a1 1 0 0 1 1.218.72" clip-rule="evenodd"></path>
                          <path fill="currentColor" d="M17.25 15.625a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0M21.75 15.625a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0M21.75 20.125a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0M17.25 20.125a1.625 1.625 0 1 1-3.25 0 1.625 1.625 0 0 1 3.25 0"></path>  
                          </Icon>
                          &nbsp; Dashboard
                  </NavLink>
                }
                </div>
              </div>
            </nav>

        </header>
    );
}