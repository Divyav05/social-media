import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Nikki",
      img: "https://images.unsplash.com/photo-1582398626929-4aaba43f31eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluc3RhZ3JhbSUyMHN0b3JpZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      name: "Sam",
      img: "https://images.unsplash.com/photo-1635865863780-232a23b9d8e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMzfHxpbnN0YWdyYW0lMjBzdG9yaWVzfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Mike",
      img: "https://images.unsplash.com/photo-1622357373129-7b3eb326eba8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGluc3RhZ3JhbSUyMHN0b3JpZXN8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      name: "Riyaa",
      img: "https://images.unsplash.com/photo-1641264998454-7614e66a29f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU5fHxpbnN0YWdyYW0lMjBzdG9yaWVzfGVufDB8fDB8fHww",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span></span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories