import { Spinner, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { getvideoByChannel } from "../state/currentVideo/currentVideoActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState, appDispatch } from "../state/store";
import { Video } from "../Models/Video";
import VideoCard from "../components/videoCard";
import { Link, useParams } from "react-router-dom";
import { getchannelById } from "../state/channel/channelActions";

function Profile(){
    const dispatch = useDispatch<appDispatch>();
    const {id} = useParams();
    useEffect(() => {
        dispatch(getvideoByChannel(id))
        dispatch(getchannelById(id));
    }, []);
    const videos=useSelector((state:RootState)=>state.currentVideo.videos)
    const channel=useSelector((state:RootState)=>state.channel.searchedChannel)

    return (
        <>
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
                    <main className="profile-page">
                    <section className="relative block h-500-px">
                    <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{
                        backgroundImage: `url(${channel?.profilImg})`
                    }}>
                        <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
                        </div>
                        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: "translateZ(0px)" }}>
                        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                        </div>
                    </section>
                    <section className="relative py-16 bg-blueGray-200">
                        <div className="container mx-auto px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                            <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                <div className="relative">
                                    <img alt="..." src={channel?.profilImg} className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
                                </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                <div className="py-6 px-3 mt-32 sm:mt-0">
                                    <button className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                                    Connect
                                    </button>
                                </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                    <div className="mr-4 p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{videos?.length}</span><span className="text-sm text-blueGray-400">videos</span>
                                    </div>
                                    <div className="mr-4 p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">{channel?.nbrFollowers}</span><span className="text-sm text-blueGray-400">Followers</span>
                                    </div>
                                    <div className="lg:mr-4 p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">89</span><span className="text-sm text-blueGray-400">Comments</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="text-center mt-12 mb-5">
                                <h3 className="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                                    {channel?.firstname} {channel?.lastname}
                                </h3>
                                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                <i className="fas fa-envelope mr-2 text-lg text-blueGray-400"></i>
                                    {channel?.email}
                                </div>
                                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                <i className="fa fa-calendar mr-2 text-lg text-blueGray-400"></i>
                                    {channel?.creationDate.toString()}
                                </div>
                            </div>
                            <Tabs isFitted variant='enclosed'>
                                <TabList mb='1em'>
                                    <Tab>Videos</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                    <div className="grid grid-cols-3 gap-4 p-4">
                                    {videos ? (
                                        videos.map((v: Video) => 
                                            <Link key={v.id} to={`/watch/${v.id}`}>
                                                <VideoCard key={v.id} {...v} />
                                            </Link>)
                                        ) : (
                                        <center><Spinner size='xl'/></center>
                                        )}
                                    </div>
                                    </TabPanel>
                                </TabPanels>
                                </Tabs>
                            </div>
                        </div>
                        </div>
                        <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
                    <div className="container mx-auto px-4">
                    </div>
                    </footer>
                    </section>
                    </main>
        </>
    )

}

export default Profile;