import React, { useState } from 'react';
// import axios from 'axios';
import api from '../utils/api';
import { Post, NewPost } from '../types'; // Assuming you've adjusted the types like below

interface PostFormProps {
  post?: Post;
}

const PostForm: React.FC<PostFormProps> = ({ post }) => {
  // Use the NewPost type for new posts or Post for existing ones
  const [formData, setFormData] = useState<Post | NewPost>(post || { 
    title: '', 
    content: '', 
    isPublished: false 
  });

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
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={formData.title} 
        onChange={(e) => setFormData({ ...formData, title: e.target.value })} 
      />
      <textarea 
        value={formData.content} 
        onChange={(e) => setFormData({ ...formData, content: e.target.value })} 
      />
      <input 
        type="checkbox" 
        checked={formData.isPublished}
        onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;