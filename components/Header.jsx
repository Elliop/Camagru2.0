import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* Left */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image src="/Logo.png" layout="fill" objectFit="contain" />
        </div>
        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image src="/C.png" layout="fill" objectFit="contain" />
        </div>
        {/* Middle - Search input feild */}

        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            ></input>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <HomeIcon className="navBtn" />

          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div
              className="absolute -top-1 -right-2 text-xs w-5 h-5 
            bg-red-500 rounded-full flex items-center justify-center
            animate-pulse text-white"
            >
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <img
            src="https://scontent-mxp1-1.xx.fbcdn.net/v/t1.6435-9/81119367_180833642971267_6901131851822268416_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF1l4AibOocnEPSxrBafps1XuEIe1dx-1Be4Qh7V3H7UNzTONhZJ_umPUBDtOgbslZTx41H1B_VkDlD_SyZcRln&_nc_ohc=sb-EJ16Oy_8AX-Prpa8&_nc_oc=AQn9MRlqK8vrkO1eqKwhRN5Gvb_9n9O9RC6KUaCX50Oekbad_766qtpLpehMU9Gvy3Q&tn=14moef0so3wb2XL5&_nc_ht=scontent-mxp1-1.xx&oh=10af5d03832d63dd8515527039bf9b74&oe=619E3185"
            alt="Profile pic"
            className="h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
