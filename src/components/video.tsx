
function Video(){

    return( 
    <>
        <div className="space-y-2 cursor-pointer" >
            <img
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                alt="Video thumbnail"
                className="w-full rounded-md"
                width="320"
                height="180"
                style={{ aspectRatio: "320 / 180", objectFit: "cover" }} />
            <div className="flex">
                <div>
                <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="..." className="shadow rounded-full h-12 mr-3 align-middle border-none" />
                </div>
                <div>
                    <h3 className="text-sm font-semibold">ElgrandeToto - 7elmet Ado 6 (Lyrics by Hamza)</h3>
                    <h3 className="text-sm text-gray-600">Elgrandetoto</h3>
                    <p className="text-xs text-gray-600">6.1M de vues • il y a 3 ans</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default Video;
