import { useState } from "react";

function Like(){
    const [liked, setLiked] = useState(false);
    const handleClick = () => {
        setLiked(!liked);
    };
    return(
        <>
            <svg onClick={handleClick}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke={liked ? 'red' : 'black'}
                strokeLinecap="round"
                strokeWidth="round"
                className="w-6 h-6"
                >
                <path d="M7 10v12"></path>
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
            </svg>
        </>
    )
}

export default Like;