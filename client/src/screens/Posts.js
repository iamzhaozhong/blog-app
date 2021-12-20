import { useEffect, useState } from "react";
// import Posts from './Posts.css'
import { getPosts } from "../services/posts";
import React from 'react'
// import api from "../services/apiConfig";


function Posts() {
  const [blogPosts, setBlogPosts] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts()
      setBlogPosts(allPosts)
      console.log(allPosts)
    }
    fetchPosts()
  }, [])
  return (
    <div className="posts">
      {blogPosts.map((post, index) => {
        <div >
          <h1 className="post">{post.title}</h1>
          <h2 className="post" >{post.author}</h2>
          <h3 className="post">{post.topic}</h3>
          <p className="post">{post.content}</p>
        </div>
      })}
    </div>
  )
}
export default Posts