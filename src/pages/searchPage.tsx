import Header from "../components/header";
import SideBarLeft from "../components/sideBarLeft";
import Video from "../components/video";

function SearchPage(){

    return(
        <>
           <div className="bg-white">
            <Header />
            <div className="flex">
                    <SideBarLeft />
                <div className="grid grid-cols-1 gap-4 p-4">
                    <div className="flex gap-6 space-y-2 cursor-pointer" >
                        <img
                            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                            alt="Video thumbnail"
                            className="w-full rounded-md"
                            style={{ maxWidth: "500px", maxHeight: "260px", width: "100%", height: "auto", objectFit: "cover" }}
                            //style={{ maxWidth: "500px", maxHeight: "300px", width: "100%", height: "auto", objectFit: "cover" }}
                            />
                        <div>
                            <div>
                                <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="..." className="shadow rounded-full h-12 mr-3 align-middle border-none" />
                            </div>
                            <div>
                                <h3 className="text-sm pb-1 font-semibold">ElgrandeToto - 7elmet Ado 6 (Lyrics by Hamza)</h3>
                                <h3 className="text-sm pb-1 text-gray-600">Elgrandetoto</h3>
                                <p className="text-xs pb-1 text-gray-600">6.1M de vues • il y a 3 ans</p>
                                <p className="text-xs pb-1 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque reprehenderit enim, quibusdam laudantium non eius dolores mollitia impedit animi distinctio labore minima quidem error fugit molestiae modi aliquam cumque.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        </>
    )
    

}

export default SearchPage;


