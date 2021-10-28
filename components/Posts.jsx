import Post from "./Post";

const posts = [
  {
    id: "69",
    username: "Elliop",
    userImg:
      "https://scontent-mxp1-1.xx.fbcdn.net/v/t1.6435-9/81119367_180833642971267_6901131851822268416_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF1l4AibOocnEPSxrBafps1XuEIe1dx-1Be4Qh7V3H7UNzTONhZJ_umPUBDtOgbslZTx41H1B_VkDlD_SyZcRln&_nc_ohc=sb-EJ16Oy_8AX-Prpa8&_nc_oc=AQn9MRlqK8vrkO1eqKwhRN5Gvb_9n9O9RC6KUaCX50Oekbad_766qtpLpehMU9Gvy3Q&tn=14moef0so3wb2XL5&_nc_ht=scontent-mxp1-1.xx&oh=10af5d03832d63dd8515527039bf9b74&oe=619E3185",
    img: "https://pbs.twimg.com/media/ESyOH6yUwAE8kN-.jpg",
    caption: "The best place in the world !",
  },
  {
    id: "70",
    username: "Elliop",
    userImg:
      "https://scontent-mxp1-1.xx.fbcdn.net/v/t1.6435-9/81119367_180833642971267_6901131851822268416_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF1l4AibOocnEPSxrBafps1XuEIe1dx-1Be4Qh7V3H7UNzTONhZJ_umPUBDtOgbslZTx41H1B_VkDlD_SyZcRln&_nc_ohc=sb-EJ16Oy_8AX-Prpa8&_nc_oc=AQn9MRlqK8vrkO1eqKwhRN5Gvb_9n9O9RC6KUaCX50Oekbad_766qtpLpehMU9Gvy3Q&tn=14moef0so3wb2XL5&_nc_ht=scontent-mxp1-1.xx&oh=10af5d03832d63dd8515527039bf9b74&oe=619E3185",
    img: "https://scontent-mxp1-1.xx.fbcdn.net/v/t1.6435-9/81119367_180833642971267_6901131851822268416_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF1l4AibOocnEPSxrBafps1XuEIe1dx-1Be4Qh7V3H7UNzTONhZJ_umPUBDtOgbslZTx41H1B_VkDlD_SyZcRln&_nc_ohc=sb-EJ16Oy_8AX-Prpa8&_nc_oc=AQn9MRlqK8vrkO1eqKwhRN5Gvb_9n9O9RC6KUaCX50Oekbad_766qtpLpehMU9Gvy3Q&tn=14moef0so3wb2XL5&_nc_ht=scontent-mxp1-1.xx&oh=10af5d03832d63dd8515527039bf9b74&oe=619E3185",
    caption: "Hey !",
  },
];

const Posts = () => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
