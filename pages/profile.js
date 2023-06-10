import Header from "../components/Header";
import Infos from "../components/profille/Infos";
import { useSession } from "next-auth/react";
import MyPosts from "../components/profille/MyPosts";

const profile = () => {
  const { data: session } = useSession();

  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll overflow-x-hidden scrollbar-hide">
      <Header />
      {session ? (
        <>
          <Infos />
          <MyPosts />
        </>
      ) : (
        <div className="flex justify-center mt-14">
          <p>You have to login first!</p>
        </div>
      )}
    </div>
  );
};

export default profile;
