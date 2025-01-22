import React from 'react'
import Section1 from './Components/Section 1/Section1'
import Section2 from './Components/Section2/Section2'
import Section3 from './Components/Section3.jsx/Section3'
import Doctor from './Components/Doctor/Doctor'
import LatestBlogs from './Components/LatestBlog/LatestBlogs'
const Home = () => {
  return (
    <div>
        <Section1/>
        <Section2/>
        <div>        <Section3/>
        <Doctor/>
        </div>
        <div>
        <LatestBlogs/>

        </div>
    </div>
    
  )
}

export default Home