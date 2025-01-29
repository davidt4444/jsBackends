import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import api from '../utils/api';
import { Post } from '../types';

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    const response = await api.get('/api/posts');
    setPosts(response.data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div id="post" key={post.id}>
          <a href={"./post/"+post.id}><h2>{post.title}</h2></a>
          By {post.author}<br />
          Published {post.createdAt}
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
