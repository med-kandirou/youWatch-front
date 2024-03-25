
import { useDispatch, useSelector } from "react-redux";
import Categories from "../components/categories";
import Header from "../components/header";
import SideBarLeft from "../components/sideBarLeft";
import { useEffect, useState} from "react";
import { getAllvideos } from "../state/videoo/videoActions";
import { RootState, appDispatch } from "../state/store";
import { Video } from "../Models/Video";
import VideoCard from "../components/videoCard";
import { Spinner } from "@chakra-ui/react";
import { Link } from "react-router-dom";


function Home() {
  const dispatch = useDispatch<appDispatch>();
  useEffect(() => {
      dispatch(getAllvideos())
  }, [dispatch]);
  
  const videos=useSelector((state:RootState)=>state.videos.videos)
    return (
      <>
        <div className="bg-white">
            <Header />
            <div className="flex">
                    <SideBarLeft />
                    <div>
                        <Categories />
                        <div className="grid grid-cols-3 gap-4 p-4">
                        {/* <InfiniteScroll
                          dataLength={videos.length}
                          next={fetchMoreData(1)}
                          hasMore={hasMore}
                          loader={<Spinner size='xl'/>}>
                          <div className='container'>
                            <div className='row'>
                              {videos &&
                                videos.map((v: Video) => 
                                  <Link key={v.id} to={`/watch/${v.id}`}>
                                    <VideoCard key={v.id} {...v} />
                                  </Link>
                                )}
                            </div>
                          </div>
                        </InfiniteScroll> */}
                        {videos ? (
                          videos.map((v: Video) => 
                            <Link key={v.id} to={`/watch/${v.id}`}>
                              <VideoCard key={v.id} {...v} />
                            </Link>)
                        ) : (
                          <center><Spinner size='xl'/></center>
                        )}
                        </div>
                    </div>
            </div>
        </div>
      </>
    );
}
  
export default Home;
  