import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import api from '../utils/api';
import { useParams } from 'react-router-dom'; // If using react-router
import { Post } from '../types';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await api.get(`/api/posts/${id}`);
      setPost(response.data);
    };
    fetchPost();
  }, [id]);

  return (
    <div>
      {post && (
        <>
          <h2>{post.title}</h2>
          By {post.author}<br />
          Published {post.createdAt}
          <p>{post.content}</p>
        </>
      )}
    </div>
  );
};

export default PostDetail;
