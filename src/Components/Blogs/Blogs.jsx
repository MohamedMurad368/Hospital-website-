import React from 'react';
import { useParams } from 'react-router-dom';
import './Blogs.css';  // Adding a custom CSS file for blog page styles

function Blogs() {
  const { blogId } = useParams();

  // Blog data based on the id
  const blogData = {
    1: {
      title: "Blog Post 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. Fusce ac interdum ante. Donec pretium lorem vitae augue fermentum, sit amet iaculis dolor tincidunt.",
      content: "Blog content details... Add more text or images to complete the article"
    },
    2: {
      title: "Blog Post 2",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Curabitur auctor, lorem nec suscipit cursus, leo tortor laoreet risus.",
      content: "Blog content here, it may contain paragraphs, images, and multimedia."
    },
    3: {
      title: "Blog Post 3",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      content: "Add more content here, like images or any other media."
    }
  };

  const blog = blogData[blogId];

  return (
    <div className="container my-5 blog-page">
      <header>
        <img
          src="https://disin-react.hibootstrap.com/images/page-banner4.jpg"
          alt="Blog Banner"
          className="img-fluid rounded shadow-sm mb-4"
        />
      </header>

      <main>
        <article className="blog-content">
          <h1 className="text-center">{blog ? blog.title : "Blog Not Found"}</h1>
          <p className="text-muted">{blog ? blog.description : "Sorry, we couldn't find the requested blog."}</p>
          
          <div className="blog-details">
            <p>{blog ? blog.content : "No additional details available."}</p>
          </div>
        </article>
      </main>

      <section className="comments mt-5">
        <h2 className="text-center">Add Your Comment</h2>
        <form>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Write your comment here..."
              rows="4"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary d-block mx-auto">Submit Comment</button>
        </form>
      </section>
    </div>
  );
}

export default Blogs;
