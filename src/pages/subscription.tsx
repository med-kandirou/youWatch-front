import { useEffect } from "react";
import Categories from "../components/categories";
import ChannelCard from "../components/channelCard";
import Header from "../components/header";
import SideBarLeft from "../components/sideBarLeft";
import { useDispatch, useSelector } from "react-redux";
import { getSubscriptionsById } from "../state/channel/channelActions";
import { Subscribe } from "../Models/Subscribe";
import { RootState, appDispatch } from "../state/store";
import { Spinner } from "@chakra-ui/react";

function Subscription() {
    const dispatch = useDispatch<appDispatch>();
    const subscribes=useSelector((state:RootState)=>state.channel.subscribes)
    useEffect(()=>{
        dispatch(getSubscriptionsById()).then((res)=>{
            console.log(res)
        })
    },[])

    return (
      <>
        <div className="bg-white">
            <Header />
            <div className="flex">
                    <SideBarLeft />
                    <div>
                        <Categories />
                        <div className="grid grid-cols-3 gap-4 p-4">
                            {subscribes ? (
                            subscribes.map((s: Subscribe) => 
                                <ChannelCard {...s} />)
                            ) : (
                            <center><Spinner size='xl'/></center>
                            )}
                        </div>
                    </div>
            </div>
        </div>
      </>
    );
}
  
export default Subscription;
  