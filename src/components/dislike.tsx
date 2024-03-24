import { useState } from "react";

function Dislike(){
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
                <path d="M17 14V2"></path>
                <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"></path>
            </svg>
        </>
    )
}

export default Dislike;