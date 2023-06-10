import { useSession } from "next-auth/react";

const Infos = () => {
  const { data: session } = useSession();
  return (
    <div className="flex w-full justify-center items-center py-14 shadow-sm">
      <div className="flex justify-between items-center max-w-4xl">
        <img
          src={session?.user?.image}
          alt="Profile pic"
          className="h-16 w-16 md:h-32 md:w-32 rounded-full p-[1.5px] border-gray-300 border-2"
        />
        <div className="pl-3 md:pl-14">
          <div className="flex mt-4 justify-start md:justify-between">
            <h1 className="text-xl font-bold">{session?.user?.username}</h1>
            <button className="text-lg ml-20 md:ml-0 font-medium border-2 px-2 py-1 rounded-md">
              Edit Profile
            </button>
          </div>
          <div className="row-span-2 col-span-2 flex justify-between">
            <p className="my-4 cursor-pointer text-base md:text-lg mr-4">
              <span className="font-bold mr-2">0</span>Posts
            </p>
            <p className="my-4 cursor-pointer text-base md:text-lg mr-4">
              <span className="font-bold mr-2">786</span>followers
            </p>
            <p className="my-4 cursor-pointer text-base md:text-lg mr-4">
              <span className="font-bold mr-2">124</span>following
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infos;
