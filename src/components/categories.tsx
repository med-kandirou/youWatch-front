import { Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { getAllCategories } from "../state/categories/categorieActions";
import { useDispatch, useSelector } from "react-redux";
import { RootState, appDispatch } from "../state/store";
import { findByCategorie } from "../state/videoo/videoActions";


function Categories(){
    const dispatch = useDispatch<appDispatch>();
    useEffect(() => {
        dispatch(getAllCategories())
    }, []);
    const categories=useSelector((state:RootState)=>state.categories.categories)
    function filter(id: number) {
        dispatch(findByCategorie(id))
    }

    return (
        <>
            <div className="ml-4 mt-6 flex gap-3">
                {categories.map(cat => (
                   <Button onClick={()=>filter(cat.id)} key={cat.id} colorScheme='black' variant='outline'>
                        {cat.name}
                    </Button>
                ))}
            </div>
        </>
    )
}

export default Categories;