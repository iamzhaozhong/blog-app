import { useEffect, useState } from "react";
// import Posts from './Posts.css'
import { getPosts } from "../services/posts";
import React from 'react'
// import api from "../services/apiConfig";


function Posts() {
  // const [blogPosts, setBlogPosts] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts()
      setPosts(allPosts)

    }
    fetchPosts()
  }, [])


  return (

    <div className="posts">
      {posts.map((post, index) => {
        return (
          <div key={index}>
            <h1 className="post">{post.title}</h1>
            <h2 className="post" >{post.author}</h2>
            <h3 className="post">{post.topic}</h3>
            <p className="post">{post.content}</p>
          </div>
        )
        {/* console.log(post) */ }
      })}

    </div>

  )
}
export default Posts