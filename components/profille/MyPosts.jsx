import { onSnapshot, collection, query, where } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import MyPost from "./MyPost";
import { useSession } from "next-auth/react";

const MyPosts = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts"),
          where("username", "==", session?.user?.username)
        ),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-4 max-w-6xl">
        {posts.map((post) => (
          <MyPost key={post.id} id={post.id} img={post.data().image} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
