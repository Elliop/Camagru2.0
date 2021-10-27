const Story = ({ img, username }) => {
  return (
    <div>
      <img src={img} alt="story" />
      <p>{username}</p>
    </div>
  );
};

export default Story;
