import { Link } from "react-router-dom";
import { Subscribe } from "../Models/Subscribe";
import { convertDate, convertNumber } from "../helpers/converters";

function ChannelCard(subscribe:Subscribe){
    return( 
    <>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end px-4 pt-4">
            </div>
            <div className="flex flex-col items-center pl-12 pr-12 py-5">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={subscribe.subscribeId.channelFollowed.profilImg} alt="Bonnie image"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{subscribe.subscribeId.channelFollowed.firstname} {subscribe.subscribeId.channelFollowed.lastname}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">{convertNumber(subscribe.subscribeId.channelFollowed.nbrFollowers)}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{convertDate(subscribe.date)}</span>
                <div className="flex mt-4 md:mt-6">
                    <Link to={`/profile/${subscribe.subscribeId.channelFollowed.id}`} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">videos</Link>
                </div>
            </div>
        </div>

    </>
    )
}

export default ChannelCard;



















