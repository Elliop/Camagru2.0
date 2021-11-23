import { signIn, useSession } from "next-auth/react";

const Infos = () => {
  const { data: session } = useSession();
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4 justify-center mt-14 shadow-sm">
      <div className="row-span-3">
        <img
          src={session?.user?.image}
          alt="Profile pic"
          className="h-32 w-32 rounded-full cursor-pointer"
        />
      </div>
      <div className="col-span-2 flex mt-4 justify-between">
        <h1 className="text-xl font-bold ml-14">{session?.user?.username}</h1>
        <button className="text-lg font-medium border-2 px-2 py-1 rounded-md">
          Edit Profile
        </button>
      </div>
      <div className="row-span-2 col-span-2 flex justify-between">
        <p className="ml-14 my-4 cursor-pointer text-lg">
          <span className="font-bold mr-2">0</span>Posts
        </p>
        <p className="ml-14 my-4 cursor-pointer text-lg">
          <span className="font-bold mr-2">786</span>followers
        </p>
        <p className="ml-14 my-4 cursor-pointer text-lg">
          <span className="font-bold mr-2">124</span>following
        </p>
      </div>
    </div>
  );
};

export default Infos;
