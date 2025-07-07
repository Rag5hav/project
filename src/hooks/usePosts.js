import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/posts';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async (searchQuery = '') => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}?search=${searchQuery}`);
      setPosts(response.data.posts);
      setError(null);
    } catch (error) {
      setError('Failed to fetch posts');
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = async (postData) => {
    try {
      console.log("Data going to backend:", postData);
      const response = await axios.post(API_URL, postData);
      setPosts([response.data, ...posts]);
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to create post',
      };
    }
  };

  const updatePost = async (id, postData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, postData);
      setPosts(posts.map(post => post._id === id ? response.data : post));
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to update post',
      };
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setPosts(posts.filter(post => post._id !== id));
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to delete post',
      };
    }
  };

  return {
    posts,
    loading,
    error,
    fetchPosts,
    createPost,
    updatePost,
    deletePost,
  };
};

export const usePost = (id) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/${id}`);
        setPost(response.data);
        setError(null);
      } catch (error) {
        setError('Failed to fetch post');
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  return { post, loading, error };
};