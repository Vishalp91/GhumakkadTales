import { useContext, useState } from "react";

import Alert from "../../components/Alert";
import { getUser, getUsername, loginUser } from "../../controllers/usersController";
import { UserContext } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";


export default function Login() {

    // Use user context
    const { setUser } = useContext(UserContext);  

    // use navigate hook
    const navigate =  useNavigate();

    //Error state 
    const [error, setError] = useState(null);

    //Form data state
    const [email, setEmail] = useState('');
    const [password, setPassword]  = useState('');


    //Handle Login
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            //Login the user
            await loginUser(email, password);
            const data = await getUsername(email);
            //Update user state
            setUser({username : data[0], email, posts : []});
            //Navigate to user dashboard
            navigate('/dashboard');
            setEmail('');
            setPassword('');
            setError('');
        }
        catch(error) {
            setError(error.message);  // the one which we set inside loginUser [usersController]
        }
    }

    return (
        <>

        {error && <Alert msg = {error}/>}

        <section className="sm:w-2/5 md:w-3/4 lg:w-2/5 min-h-[300px] bg-gray-100 rounded-md m-auto p-6 mb-10 mt-10 flex flex-col items-center justify-between">
            <h1 className="text-3xl sm:text-4xl text-gray-800 font-bold text-center mb-2">
                                Login to your account 
            </h1>
         <form onSubmit = {handleLogin} className="mt-10">
                            <div className="flex flex-col">
                                <label htmlFor="email" className="hidden">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter Email"
                                    value = {email}
                                    onChange = {(e) => setEmail(e.target.value)}
                                    className="lg:w-80 w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                    autoFocus
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label htmlFor="password" className="hidden">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Enter Password"
                                    value = {password}
                                    onChange = {(e) => setPassword(e.target.value)}
                                    className="lg:w-80 w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex justify-center">
                            <button
                                type="submit"
                                className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-semibold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300"
                            >
                                Login
                            </button>
                            </div>
                        </form>

                        <div className="mt-4">Don't have an account? <Link to = '/register' className="font-bold">Register</Link></div>
        </section>
        </>
    )
}