
import Categories from "../components/categories";
import Header from "../components/header";
import SideBarLeft from "../components/sideBarLeft";
import Video from "../components/video";


  
function Home() {
   
    return (
      <>
        <div className="bg-white">
            <Header />
            <div className="flex">
                    <SideBarLeft />
                    <div>
                        <Categories />
                        <div className="grid grid-cols-3 gap-4 p-4">
                            <Video />
                            <Video />
                            <Video />
                            <Video />
                        </div>
                    </div>
            </div>
        </div>
      </>
    );
}
  
export default Home;
  