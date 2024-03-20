import { Link, useNavigate } from "react-router-dom";
import { RootState } from "../state/store";
import { useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";

function SideBarLeft(){
    const isAuth=useSelector((state:RootState)=>state.channel.isAuth)
    const role=useSelector((state:RootState)=>state.channel.channel?.role)
    const navigate=useNavigate()
    const toast=useToast()
    function subscription(){
        isAuth ? navigate("/subscription") : toast({
            title: `Login first`,
            variant: 'top-accent',
            isClosable: true,
          })
    }
    return( 
    <>
    <div className="w-60 p-4 space-y-6">
        <div className="flex items-center space-x-2">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-700"
            >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <Link to="/" className="font-medium">Accueil</Link>
        </div>

        <div className="flex items-center space-x-2">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-700"
            >
            <path d="M9 18V5l12-2v13"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="16" r="3"></circle>
            </svg>
            <Link to="/trending" className="font-medium">trending</Link>
        </div>
        <div className="flex items-center space-x-2">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-700"
            >
            <path d="m4 5 8 8"></path>
            <path d="m12 5-8 8"></path>
            <path d="M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"></path>
            </svg>
            <button onClick={()=>{subscription()}} className="font-medium">Subscriptions</button>
        </div>
       
        {role == 'ADMIN' && (
            <div className="flex items-center space-x-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-700">
                    <path d="m4 5 8 8"></path>
                    <path d="m12 5-8 8"></path>
                    <path d="M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"></path>
                </svg>
                <Link to="/statistiques" className="font-medium">Statistiques</Link>
            </div>
        )}
        {role == 'ADMIN' && (
            <div className="flex items-center space-x-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-700">
                    <path d="m4 5 8 8"></path>
                    <path d="m12 5-8 8"></path>
                    <path d="M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"></path>
                </svg>
                <Link to="/categories" className="font-medium">Categories</Link>
            </div>
        )}

        </div>
    </>
    )
}

export default SideBarLeft;