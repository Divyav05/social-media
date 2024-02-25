import { useState } from 'react';
import axios from 'axios';
import './share.scss';
import Image from '../../assets/img.png';
import Map from '../../assets/map.png';
import Friend from '../../assets/friend.png';

const Share = () => {
  const [postContent, setPostContent] = useState('');

  const handlePost = async () => {
    try {
      // Send a POST request to the backend to create a new post
      const response = await axios.post('http://localhost:5000/api/posts', {
        content: postContent,
        // Add any additional data (images, tags, etc.) as needed
      });
      console.log('Post created:', response.data);
      // Optionally, clear the input field or update the UI to indicate success
    } catch (error) {
      console.error('Error creating post:', error);
      // Handle any errors (e.g., display an error message to the user)
    }
  };

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <input
            type="text"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder={`What's on your mind?`}
          />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{ display: 'none' }} />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={handlePost}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
