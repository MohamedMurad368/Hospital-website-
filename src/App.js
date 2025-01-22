import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';  // Import NavBar
import Home from './Home'; // Home component
import Services from './Components/Services/Services';
import DoctorPage from './Components/Singlepage/DoctorPage';
import Footer from './Footer/Footer';
import Blogs from './Components/Blogs/Blogs.jsx';  
import LatestBlogs from './Components/LatestBlog/LatestBlogs.jsx';  

function App() {
  return (
    <Router>
      <div className="App">
        {/* NavBar will be shown on every page */}
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/services" element={<Services />} />
          <Route path="/doctor/:doctorId" element={<DoctorPage />} />
          <Route path="/blogs/:blogId" element={<Blogs />} /> {/* صفحة المدونة الفردية */}
          <Route path="/latest-blogs" element={<LatestBlogs />} /> {/* صفحة LatestBlogs */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
