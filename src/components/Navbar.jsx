import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";

const navData = [
  {
    path: "/",
    title: "Home"
  },
  {
    path: "/about",
    title: "About"
  },
  {
    path: "/blog",
    title: "Blog"
  },
  {
    path: "/contact",
    title: "Contact"
  },
]

function Navbar() {
  return (
    <BrowserRouter>
    <>
    <nav className='w-full flex justify-between items-center px-12 py-4 bg-teal-500'>
         <div>
            <h1 className='text-white font-bold text-2xl'>Olla</h1>
        </div>
        <div>
          <ul className='flex gap-8 text-white font-semibold'>
            {
              navData?.map((itm) => {
                return(
                  <li><Link to={itm.path}>{itm.title}</Link></li>
                )
              })
            }
          </ul>
        </div>

    </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
    
    </>
    </BrowserRouter>
  )
}

export default Navbar


