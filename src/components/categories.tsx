import { Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { getAllCategories } from "../state/categories/categorieActions";
import { useDispatch } from "react-redux";


function Categories(){
    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch(getAllCategories()).then((res:string) => {
        //     console.log(res);
        // }); 
        console.log("test");
    });
    
    return (
        <>
            <div className="ml-4 mt-6 flex gap-3">
                <Button colorScheme='black' variant='outline'>
                    Button
                </Button>
            </div>
        </>
    )
}

export default Categories;