

export default function Icon({className, children}) {

    return (
        <svg
                                // fill="gray"
                                className= {className}
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
        >  
            {children}
        </svg>
    )
}