import { useEffect } from "react";
import Comments from "../components/comments";
import Header from "../components/header"
import { getCommentByVideo, getCurrentVideo, getvideoByChannel } from "../state/currentVideo/currentVideoActions";
import { useDispatch, useSelector } from "react-redux";
import { RootState, appDispatch } from "../state/store";
import { Link, useParams } from "react-router-dom";
import { convertDate, convertNumber } from "../helpers/converters";
import { Video } from "../Models/Video";
import VideoCard from "../components/videoCard";
import Categories from "../components/categories";
import { Comment } from "../Models/Comment";
import { Spinner, useToast } from "@chakra-ui/react";

function VideoPage () {
    const video_id = useParams();
    const dispatch = useDispatch<appDispatch>();
    const currentVideo=useSelector((state:RootState)=>state.currentVideo.currentVideo)
    const videos=useSelector((state:RootState)=>state.currentVideo.videos)
    const comments=useSelector((state:RootState)=>state.currentVideo.comments)
    const isAuth=useSelector((state:RootState)=>state.channel.isAuth)
    useEffect(() => {
        dispatch(getCurrentVideo(video_id.id)).then(() => {
            dispatch(getvideoByChannel(localStorage.getItem('id_channel').toString()));
            dispatch(getCommentByVideo(video_id.id));
        });
    },[video_id]);

    const toast = useToast()
    function follow(){
        isAuth ? console.log(isAuth) : toast({
            title: `Login first`,
            variant: 'top-accent',
            isClosable: true,
          })
    }
    function react(){
        isAuth ? console.log(isAuth) : toast({
            title: `Login first`,
            variant: 'top-accent',
            isClosable: true,
          })
    }

    return (
        <>
            <Header />
            <Categories />
            <div className="max-w-screen-xl mx-auto mt-12">
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                    <div className="aspect-w-16 aspect-h-9 bg-white">
                        <iframe 
                            src={currentVideo?.link}
                            width="640"
                            className="w-full rounded-md ml-2"
                            height="360"
                            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                            style={{ aspectRatio: "320 / 180", objectFit: "cover" }}
                         ></iframe>
                    </div>
                    <div className="flex flex-col p-4">
                        <h1 className="text-2xl font-bold">{currentVideo?.title}</h1>
                        <div className="flex items-center justify-between py-2">
                        <div className="flex items-center space-x-2">
                            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                            <Link to={`/profile/${currentVideo?.channel.id}`}>
                                <img
                                    className="aspect-square h-full w-full"
                                    alt="Sparkle Beats"
                                    src={currentVideo?.channel.profilImg}
                                />
                            </Link>      
                            </span>
                            <div>
                                <div className="text-sm font-semibold">{currentVideo?.channel.firstname} {currentVideo?.channel.lastname}</div>
                                <div className="text-sm">{convertNumber(currentVideo?.channel.nbrFollowers)} followers</div>
                            </div>
                            <div>
                                <button onClick={()=>follow()} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 me-2 mb-2 ml-4">Follow</button>
                            </div>
                        </div>
                        <span className="text-sm font-semibold">
                            {currentVideo?.nbrVues !== undefined
                                ? `${convertNumber(currentVideo.nbrVues)} vues`
                                : "Unknown vues"}
                            {" il y a "}

                            {currentVideo?.datePosting !== undefined
                                ? `${convertDate(currentVideo?.datePosting)}`
                                : "Unknown date"}
                            </span>
                        </div>
                        <div className="flex items-center space-x-4">
                        <button onClick={()=>react()} className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 flex items-center space-x-1">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="round"
                            className="w-6 h-6"
                            >
                            <path d="M7 10v12"></path>
                            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                            </svg>
                            <span>{currentVideo?.nbrLikes}</span>
                        </button>
                        <button onClick={()=>react()} className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 flex items-center space-x-1">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="round"
                            className="w-6 h-6"
                            >
                            <path d="M17 14V2"></path>
                            <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z"></path>
                            </svg>
                        </button>
                        <button className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 flex items-center space-x-1">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="round"
                            className="w-6 h-6"
                            >
                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                            <polyline points="16 6 12 2 8 6"></polyline>
                            <line x1="12" x2="12" y1="2" y2="15"></line>
                            </svg>
                            <span>share</span>
                        </button>
                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="round"
                            className="w-6 h-6"
                            >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M17 12h.01"></path>
                            <path d="M12 12h.01"></path>
                            <path d="M7 12h.01"></path>
                            </svg>
                        </button>
                        </div>
                    </div> 
                    <div className="bg-slate-200 w-11/12 p-6 rounded-lg ml-8 mb-6">
                        <p className="font-bold mb-2">Desctiption :</p>
                        {currentVideo?.description}
                    </div>           
                    <div className="space-y-6">
                        <div className="flex ml-7 items-center justify-around w-11/12">
                            <h2 className="text-2xl font-bold">( {comments.length} ) Comments</h2>
                            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                                Sort by
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <input
                                className="flex h-10 border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-4/5 rounded-md border p-2 ml-10"
                                placeholder="Add comment...." />
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-4">
                                <div className="flex-1 ml-5">
                                    {comments ? (
                                        comments.map((c: Comment) => 
                                            <Comments {...c} />
                                        )
                                    ) : (
                                        <div>aucun comment</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div>
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">À suivre ({videos?.length})</h2>
                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                            All
                        </button>
                        </div>
                        <div className="space-y-2">
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full" data-v0-t="card">
                            <div className="p-6">
                                <div className="space-x-4">
                                    {videos ? (
                                        videos.map((v: Video) => 
                                            <Link key={v.id} className="mb-3" to={`/watch/${v.id}`}>
                                                <VideoCard key={v.id} {...v} />
                                            </Link>)
                                        ) : (
                                        <center><Spinner size='xl'/></center>
                                    )}
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoPage;