import { HeartIcon, ChatIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, onSnapshot } from "@firebase/firestore";

const MyPost = ({ id, img }) => {
  const { data: session } = useSession();
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  );
  useEffect(
    () =>
      onSnapshot(collection(db, "posts", id, "comments"), (snapshot) =>
        setComments(snapshot.docs)
      ),
    [db, id]
  );

  return (
    <div className="bg-white my-7 border rounded-sm relative w-96 h-64 cursor-pointer">
      <img src={img} className="absolute inset-0 bg-cover bg-center z-0" />
      <div
        className="opacity-0 hover:opacity-100 duration-300 absolute 
      inset-0 z-10 flex justify-center items-center text-white text-2xl font-bold bg-gray-400 bg-opacity-30"
      >
        <div className="flex items-center mx-2">
          <HeartIcon className="h-10" />
          <p className="mx-2">{likes.length}</p>
        </div>
        <div className="flex items-center mx-2 opacity-100">
          <ChatIcon className="h-10" />
          <p className="mx-2">{comments.length}</p>
        </div>
      </div>
    </div>
  );
};

export default MyPost;
