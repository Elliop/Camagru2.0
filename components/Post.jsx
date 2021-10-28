import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

const Post = ({ id, username, userImg, img, caption }) => {
  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          alt="Profile pic"
          className="w-12 h-12 rounded-full object-contain border p-1 mr-3"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5 cursor-pointer" />
      </div>

      {/* img */}
      <img src={img} className="object-cover w-full" />

      {/* Buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      {/* Caption */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username} </span>
        {caption}
      </p>

      {/* Comments */}

      {/* input Box */}
    </div>
  );
};

export default Post;
