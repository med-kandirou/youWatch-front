import { Button, FormControl, FormLabel, Input, Spinner, Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { getvideoByChannel } from "../state/currentVideo/currentVideoActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState, appDispatch } from "../state/store";
import { Video } from "../Models/Video";
import VideoCard from "../components/videoCard";
import { Link } from "react-router-dom";
import { findVueByChannelId } from "../state/videoo/videoActions";
import { Vue } from "../Models/Vue";

function MyProfile(){
    const {register,handleSubmit,formState: { errors }} = useForm();
    const dispatch = useDispatch<appDispatch>();
    useEffect(() => {
        dispatch(getvideoByChannel(localStorage.getItem('id_channel')))
        dispatch(findVueByChannelId(localStorage.getItem('id_channel')))
    }, []);
    const videos=useSelector((state:RootState)=>state.currentVideo.videos)
    const vues=useSelector((state:RootState)=>state.videos.vues)
    const channel=useSelector((state:RootState)=>state.channel.channel)

    return (
        <>
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
                    <main className="profile-page">
                    <section className="relative block h-500-px">
                    <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
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
                                    <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
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
                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">22</span><span className="text-sm text-blueGray-400">Friends</span>
                                    </div>
                                    <div className="mr-4 p-3 text-center">
                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">10</span><span className="text-sm text-blueGray-400">Photos</span>
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
                                    <Tab>Profile</Tab>
                                    <Tab>Videos</Tab>
                                    <Tab>Historique</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                    <Stack spacing="6">
                                        <form >
                                            <Stack spacing="5">
                                                <FormControl>
                                                    <FormLabel >First Name</FormLabel>
                                                    <Input id="firstname" className="rounded-md border-gray-300" type="text" value={channel?.firstname} {...register("firstname", { required: true })} />
                                                    {errors.firstname && <p className="text-red-500">First name is required</p>}
                                                </FormControl>
                                                <FormControl>
                                                    <FormLabel>Last Name</FormLabel>
                                                    <Input id="lastname" className="rounded-md border-gray-300" type="text" value={channel?.lastname} {...register("lastname", { required: true })} />
                                                    {errors.lastname && <p className="text-red-500">Last name is required</p>}
                                                </FormControl>  
                                                <FormControl>
                                                    <FormLabel>Email</FormLabel>
                                                    <Input id="email" className="rounded-md border-gray-300" type="email" value={channel?.email} {...register("email", { required: true })}/>
                                                    {errors.email && <p className="text-red-500">Email is required</p>}
                                                </FormControl>
                                                <FormControl>
                                                    <FormLabel>Password</FormLabel>
                                                    <Input id="password" className="rounded-md border-gray-300" type="password" {...register("password", { required: true })}/>
                                                    {errors.password && <p className="text-red-500">Password is required</p>}
                                                </FormControl>
                                                <FormControl>
                                                    <FormLabel >Confirmation password</FormLabel>
                                                    <Input id="cpassword" type="password" className="rounded-md border-gray-300" {...register("cpassword", { required: true })}/>
                                                    {errors.cpassword && <p className="text-red-500">Confirmation password is required</p>}
                                                </FormControl>
                                            </Stack>
                                            <Stack spacing="6" className="mt-10">
                                                <Button colorScheme="red" type='submit'>Update</Button>
                                            </Stack>
                                        </form>
                                        </Stack>
                                    </TabPanel>
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
                                    <TabPanel>
                                    <div className="grid grid-cols-3 gap-4 p-4">
                                    {vues ? (
                                        vues.map((v: Vue) => 
                                            <Link key={v.video_channel_id.video.id} to={`/watch/${v.video_channel_id.video.id}`}>
                                                <VideoCard key={v.video_channel_id.video.id} {...v.video_channel_id.video} />
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

export default MyProfile;