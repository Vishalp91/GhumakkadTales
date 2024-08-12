import { useState } from "react"


export default function Success({msg}) {

    const [show, setShow] = useState(true);

    setTimeout(() => {
        setShow(false);
    }, 2000);

    return (
        <>
        {show && 
            <div className="sm:w-2/5 md:w-3/4 lg:w-2/5 m-auto py-3 px-3 rounded-lg bg-green-400 border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none text-center mt-10 mb-10 ">
            {msg}
            </div>
        }
        </>
    )
}