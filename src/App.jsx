import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App h-screen w-full flex flex-col justify-between pb-[3.7rem]">
      <Navbar activePage={"home"} />
      <div className="heightPage flex flex-col md:flex-row justify-between p-5 md:px-[50px]">
        <div className="flex flex-col gap-3 md:justify-center">
          <p className="font-[comfortaa-bold] text-white text-base sm:text-2xl">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <p className="font-[bilie-eilish] text-white text-[120px] sm:text-[200px] leading-[120px] sm:leading-[200px] tracking-widest">
            SPACE
          </p>
          <p className="text-white text-sm sm:text-lg sm:w-[550px]">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center">
          <Link to={"/space/destination/0"}>
            <div className="h-52 w-52 lg:h-80 lg:w-80 font-[bilie-eilish] bg-white transition-colors hover:bg-gray-100 text-black text-3xl leading-[30px] rounded-[50%] flex justify-center items-center tracking-widest">
              EXPLORE
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
