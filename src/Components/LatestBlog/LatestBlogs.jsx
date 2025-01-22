import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const LatestBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Blog Post 1",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      imageUrl: "https://disin-react.hibootstrap.com/images/blog/blog1.jpg"
    },
    {
      id: 2,
      title: "Blog Post 2",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "https://disin-react.hibootstrap.com/images/blog/blog2.jpg"
    },
    {
      id: 3,
      title: "Blog Post 3",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris .",
      imageUrl: "https://disin-react.hibootstrap.com/images/blog/blog3.jpg"
    }
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Our Latest Blogs</h1>
      <div className="row">
        {blogs.map(blog => (
          <div className="col-md-4 mb-4" key={blog.id}>
            <div className="card shadow-sm rounded">
              <Link to={`/blogs/${blog.id}`}>
                <img 
                  src={blog.imageUrl} 
                  alt={blog.title} 
                  className="card-img-top rounded-top" 
                />
                <div className="card-body">
                  <h2 className="card-title">{blog.title}</h2>
                  <p className="card-text">{blog.description}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
