
import { useDispatch, useSelector } from "react-redux";
import Categories from "../components/categories";
import Header from "../components/header";
import SideBarLeft from "../components/sideBarLeft";
import Video from "../components/video";
import { useEffect } from "react";
import { getAllvideos } from "../state/videoo/videoActions";
import { RootState } from "../state/store";


  
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getAllvideos(0))
      console.log(videos)
  }, []);
  const videos=useSelector((state:RootState)=>state.videos.videos.content)
    return (
      <>
        <div className="bg-white">
            <Header />
            <div className="flex">
                    <SideBarLeft />
                    <div>
                        <Categories />
                        <div className="grid grid-cols-3 gap-4 p-4">
                          {videos.map(v => (
                              <Video />
                          ))}
                        </div>
                    </div>
            </div>
        </div>
      </>
    );
}
  
export default Home;
  