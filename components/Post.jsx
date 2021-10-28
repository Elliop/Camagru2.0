const Post = ({ id, username, userImg, img, caption }) => {
  return (
    <div>
      {/* Header */}
      <div>
        <img src={userImg} alt="Profile pic" />
        <p>{username}</p>
      </div>

      {/* img */}
      <img src={img} />

      {/* Buttons */}

      {/* Caption */}

      {/* Comments */}

      {/* input Box */}
    </div>
  );
};

export default Post;
