import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function PrivateRoutes() {
    const navigate = useNavigate();
    const isAuth=useSelector((state:RootState)=>state.channel.isAuth)
    useEffect(() => {
        if(!isAuth){
            navigate('/login');
        }

    }, [])
    return (
        <Outlet />
    )
}