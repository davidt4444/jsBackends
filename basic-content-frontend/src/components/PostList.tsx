import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import api from '../utils/api';
import { Post } from '../types';

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await api.get('/api/posts');
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default PostList;
