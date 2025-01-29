import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import api from '../utils/api';
import { useParams, useNavigate } from 'react-router-dom'; // If using react-router
import { Post, NewPost } from '../types'; // Assuming you've adjusted the types like below

interface PostFormProps {
  post?: Post;
}

const PostForm: React.FC<PostFormProps> = ({ post }) => {
  // Use the NewPost type for new posts or Post for existing ones
  const [formData, setFormData] = useState<Post | NewPost>(post || { 
    title: '', 
    content: '', 
    author: '', 
    category: '', 
    isPublished: false 
  });
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      if(id!=undefined){
        const response = await api.get(`/api/posts/${id}`);
        setFormData(response.data);
      }
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (post) {
      // If we're updating an existing post, we'll use its ID
      await api.put(`/api/posts/${post.id}`, formData);
    } else {
      // Creating a new post
      await api.post('/api/posts', formData);
    }
    // Handle post operation (redirect, update list, etc.)
    navigate('/admin');
  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        Title:
        <input 
          value={formData.title} 
          onChange={(e) => setFormData({ ...formData, title: e.target.value })} 
        />
      </div>
      <div>
        Author:
        <input 
          value={formData.author} 
          onChange={(e) => setFormData({ ...formData, author: e.target.value })} 
        />
      </div>
      <div>
        Category:
        <input 
          value={formData.category} 
          onChange={(e) => setFormData({ ...formData, category: e.target.value })} 
        />
      </div>
      <div>
        Content:
        <textarea 
          value={formData.content} 
          onChange={(e) => setFormData({ ...formData, content: e.target.value })} 
        />
      </div>
      <div>
        Publish:
        <input 
          type="checkbox" 
          checked={formData.isPublished}
          onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;