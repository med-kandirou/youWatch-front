import { useDispatch, useSelector } from "react-redux";
import Header from "../components/header";
import SideBarLeft from "../components/sideBarLeft";
import { RootState, appDispatch } from "../state/store";
import { Video } from "../Models/Video";
import { convertDate, convertNumber } from "../helpers/converters";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { searchVideo } from "../state/videoo/videoActions";


function SearchPage(){
    const dispatch= useDispatch<appDispatch>()
    const {inputSearch} = useParams();
    const videos=useSelector((state: RootState) => state.videos.videos);
    useEffect(() => {
        dispatch(searchVideo(inputSearch))
    }, []);
    return(
        <>
           <div className="bg-white">
            <Header />
            <div className="flex">
                <SideBarLeft />
                <div className="grid grid-cols-1 gap-4 p-4">
                    {videos && videos.length > 0 ? (
                        videos.map((v: Video) => 
                            <Link key={v.id} to={`/watch/${v.id}`}>
                                <div className="flex gap-6 space-y-2 cursor-pointer">
                                    <img
                                        src={v.thumbnail}
                                        alt="Video thumbnail"
                                        className="w-full rounded-md"
                                        style={{ maxWidth: "500px", maxHeight: "260px", width: "100%", height: "auto", objectFit: "cover" }}
                                        />
                                    <div>
                                        <h3 className="text-sm pb-1 font-semibold">{v.title}</h3>
                                        <div className="flex mb-3 mt-3">
                                            <img src={v.channel.profilImg} alt="..." className="shadow rounded-full h-12 mr-3 align-middle border-none" />
                                            <div>
                                                <h3 className="text-sm pb-1 text-gray-600">{v.channel.firstname} {v.channel.lastname}</h3>
                                                <p className="text-xs pb-1 text-gray-600">{convertNumber(v.nbrVues)} de vues • il y a {convertDate(v.datePosting)}</p>
                                            </div>              
                                        </div>
                                        <div>       
                                            <p className="text-xs pb-1 text-gray-600">{v.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    ) : (
                        <div>aucun Video</div>
                    )}
                </div>
            </div>
        </div>
        </>
    )
}

export default SearchPage;
