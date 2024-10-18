import { useEffect } from "react";
import { useState } from "react";
import Post from "./Post";
import './User.css'

export default function Posts(){

    const [post, setPosts] = useState([]);

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])

    return(
        <div>
            <h2>Posts: {post.length} </h2>
            {
                post.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}