import { useEffect } from "react";
import { appDispatch } from "../../state/store";
import { useDispatch } from "react-redux";
import Categories from "../../components/categories";
import Header from "../../components/header";
import SideBarLeft from "../../components/sideBarLeft";


function Statistiques() {
  const dispatch = useDispatch<appDispatch>();
  useEffect(() => {
      
  }, []);

    return (
      <>
        <div className="bg-white">
            <Header />
            <div className="flex">
                    <SideBarLeft />
                    <div>
                        <Categories />
                        <div className="flex justify-center py-10 p-14">
                            <div className="container mx-auto pr-4">
                                <div className="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
                                    <div className="h-20 bg-red-400 flex items-center justify-between">
                                        <p className="mr-0 text-white text-lg pl-5">Video</p>
                                    </div>
                                    <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
                                        <p>TOTAL</p>
                                    </div>
                                    <p className="py-4 text-3xl ml-5">20,456</p>
                                </div>
                            </div>
                            <div className="container mx-auto pr-4">
                                <div className="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
                                    <div className="h-20 bg-red-400 flex items-center justify-between">
                                        <p className="mr-0 text-white text-lg pl-5">Channel</p>
                                    </div>
                                    <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
                                        <p>TOTAL</p>
                                    </div>
                                    <p className="py-4 text-3xl ml-5">20,456</p>
                                </div>
                            </div>
                            <div className="container mx-auto pr-4">
                                <div className="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
                                    <div className="h-20 bg-red-400 flex items-center justify-between">
                                        <p className="mr-0 text-white text-lg pl-5">Views</p>
                                    </div>
                                    <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
                                        <p>TOTAL</p>
                                    </div>
                                    <p className="py-4 text-3xl ml-5">20,456</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
      </>
    );
}
  
export default Statistiques;
  