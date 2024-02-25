import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Diya",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Live for today, plan for tomorrow.",
      img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZyaWVuZHN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      name: "Riya",
      userId: 2,
      profilePic:
        "https://images.unsplash.com/photo-1616907469802-61a677f3e154?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzI1fHxpbnN0YWdyYW0lMjBzdG9yaWVzfGVufDB8fDB8fHww",
      desc: "Your only limit is you.",
      img: "https://images.unsplash.com/photo-1508145622095-70bb7b2d59cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHNpbmdsZSUyMHdvbWFufGVufDB8fDB8fHww",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
