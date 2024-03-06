import Header from "../components/header";

  
function Home() {
    return (
      <>
        <div className="bg-white">
            <Header />
            <div className="flex">
                <div className="w-60 p-4 space-y-6">
                <div className="flex items-center space-x-2">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-gray-700"
                    >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span className="font-medium">Accueil</span>
                </div>
                <div className="flex items-center space-x-2">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-gray-700"
                    >
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                    </svg>
                    <span className="font-medium">Tous</span>
                </div>
                <div className="flex items-center space-x-2">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-gray-700"
                    >
                    <path d="M9 18V5l12-2v13"></path>
                    <circle cx="6" cy="18" r="3"></circle>
                    <circle cx="18" cy="16" r="3"></circle>
                    </svg>
                    <span className="font-medium">Musique</span>
                </div>
                <div className="flex items-center space-x-2">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-gray-700"
                    >
                    <path d="m4 5 8 8"></path>
                    <path d="m12 5-8 8"></path>
                    <path d="M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"></path>
                    </svg>
                    <span className="font-medium">Abonnements</span>
                </div>
                </div>
                <div className="grid grid-cols-4 gap-4 p-4">
                <div className="space-y-2">
                    <img
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        alt="Video thumbnail"
                        className="w-full rounded-md"
                        width="320"
                        height="180"
                        style={{ aspectRatio: "320 / 180", objectFit: "cover" }}
                    />
                    <div className="flex">
                        <div>
                        <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="..." className="shadow rounded-full max-52 h-52 align-middle border-none" />
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold">ElgrandeToto - 7elmet Ado 6 (Lyrics by Hamza)</h3>
                            <h3 className="text-sm text-gray-600">Elgrandetoto</h3>
                            <p className="text-xs text-gray-600">6.1M de vues • il y a 3 ans</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </>
    );
}
  
export default Home;
  