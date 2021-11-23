import Header from "../components/Header";
import Infos from "../components/profille/Infos";
import { useSession } from "next-auth/react";

const profile = () => {
  const { data: session } = useSession();

  return (
    <div>
      <Header />
      {session ? (
        <Infos />
      ) : (
        // Posts
        <div className="flex justify-center mt-14">
          You have to login first!
        </div>
      )}
    </div>
  );
};

export default profile;
