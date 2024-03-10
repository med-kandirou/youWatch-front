import Comments from "../components/comments";
import Header from "../components/header"
import Video from "../components/videoCard";


function VideoPage () {
    return (
        <>
            <Header />
            <div className="max-w-screen-xl mx-auto mt-12">
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                    <div className="aspect-w-16 aspect-h-9 bg-white">
                        <iframe 
                            src="https://player.cloudinary.com/embed/?cloud_name=drlfmis63&public_id=samples/dance-2"
                            width="640"
                            className="w-full rounded-md ml-2"
                            height="360"
                            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                            style={{ aspectRatio: "320 / 180", objectFit: "cover" }}
                         ></iframe>
                    </div>
                    <div className="flex flex-col p-4">
                        <h1 className="text-2xl font-bold">ElgrandeToto - 7elmet Ado 6 (Lyrics by Hamza)</h1>
                        <div className="flex items-center justify-between py-2">
                        <div className="flex items-center space-x-2">
                            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                            <img
                                className="aspect-square h-full w-full"
                                alt="Sparkle Beats"
                                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                            />
                            </span>
                            <span className="text-sm">Sparkle Beats</span>
                        </div>
                        <span className="text-sm">153 k vues il y a 1 an</span>
                        </div>
                        <div className="flex items-center space-x-4">
                        <button className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 flex items-center space-x-1">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            //strokeWidth="2"
                            strokeLinecap="round"
                            strokeWidth="round"
                            className="w-6 h-6"
                            >
                            <path d="M7 10v12"></path>
                            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                            </svg>
                            <span>798</span>
                        </button>
                        <button className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 flex items-center space-x-1">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            //strokeWidth="2"
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
                            //strokeWidth="2"
                            strokeLinecap="round"
                            strokeWidth="round"
                            className="w-6 h-6"
                            >
                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                            <polyline points="16 6 12 2 8 6"></polyline>
                            <line x1="12" x2="12" y1="2" y2="15"></line>
                            </svg>
                            <span>Partager</span>
                        </button>
                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            //strokeWidth="2"
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
                        <Comments />
                    </div>
                    <div>
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">À suivre</h2>
                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                            Tout
                        </button>
                        </div>
                        <div className="space-y-2">
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full" data-v0-t="card">
                            <div className="p-6">
                                <div className="space-x-4">
                                    <Video />
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