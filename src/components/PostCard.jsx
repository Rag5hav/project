import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Eye, Clock } from 'lucide-react';

const PostCard = ({ post }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getReadingTime = (content) => {
    const wordsPerMinute = 200;
    const words = content.split(' ').length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  return (
    <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {post.featuredImage && (
        <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <User className="h-4 w-4" />
            <span>{post.author?.name || 'Anonymous'}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(post.createdAt)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{getReadingTime(post.content)}</span>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
          <Link to={`/post/${post._id}`}>{post.title}</Link>
        </h2>

        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt || post.content.substring(0, 150) + '...'}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-3 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Eye className="h-4 w-4" />
              <span>{post.views || 0}</span>
            </div>
            <Link
              to={`/post/${post._id}`}
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;