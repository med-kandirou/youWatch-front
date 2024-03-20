import { Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Subscribe } from "../../Models/Subscribe";
import ChannelCard from "../../components/channelCard";
import Header from "../../components/header";
import SideBarLeft from "../../components/sideBarLeft";
import { getSubscriptionsById } from "../../state/channel/channelActions";
import { RootState, appDispatch } from "../../state/store";
import { Category } from "../../Models/Categorie";
import { deleteCategory, getAllCategories } from "../../state/categories/categorieActions";

function Categories() {
    const dispatch = useDispatch<appDispatch>();
    const categories=useSelector((state:RootState)=>state.categories.categories)
    useEffect(()=>{
        
    },[])
    function handleDelete(id:number){
        dispatch(deleteCategory(id)).then(()=>{
            dispatch(getAllCategories())
        })
    }
    return (
      <>
        <div className="bg-white">
                <Header />
                <div className="flex">
                    <SideBarLeft />
                    <div>
                        <div className="grid grid-cols-4 gap-4 p-4">
                            {categories ? (
                                categories.map((c: Category) => (
                                    <div key={c.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <div className="flex justify-end px-4 pt-4">
                                        
                                        </div>
                                        <div className="flex flex-col items-center pl-12 pr-12 py-5">
                                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{c.name}</h5>
                                            <div className="flex mt-4 md:mt-6">
                                                <button onClick={() => handleDelete(c.id)} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <center><Spinner size='xl' /></center>
                            )}
                        </div>
                    </div>
                </div>
            </div>
      </>
    );
}
  
export default Categories;
  