import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import api from '../utils/api';
import { useNavigate } from 'react-router-dom'; // If using react-router
import { Post } from '../types';

const PostAdmin: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  const fetchPosts = async () => {
    const response = await api.get('/api/posts');
    setPosts(response.data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  const deletePost = async (event: React.FormEvent, id: Number) => {
    event.preventDefault();
    await api.delete(`/api/posts/${id}`);
    fetchPosts();
  };

  return (
    <div>
      <a href="./post"><h2>Create New Post</h2></a>
      {posts.map(post => (
        <div id="post" key={post.id}>
          <a href={"./post/"+post.id}><h2>{post.title}</h2></a>
          By {post.author}<br />
          Published {post.createdAt}
          <p>{post.content}</p>
          <a href={"./postEdit/"+post.id}>Edit</a> | 
          <a onClick={(e)=>deletePost(e, post.id)}>Delete</a>
        </div>
      ))}
    </div>
  );
};

export default PostAdmin;
