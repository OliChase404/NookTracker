import React, { useState, useEffect } from "react";
import PostCardContainer from "./PostCardContainer";

export const PostForm = () => {
  const [title, setTitle] = useState("");  
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  const [allPosts, setAllPosts] = useState([]);

  useEffect(()=>{
    fetch("/forum")
    .then(r=>r.json())
    .then(posts=>setAllPosts(posts))
  },[])

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/forum", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: content,
      }),
    })
      .then((r) => r.json())
      .then((newPost) => {setAllPosts([...allPosts, newPost])});
  }

  return (
    <div>
      <div className="Forum">
        <h1>Welcome to the Forums</h1>
      </div>
      <div className="ForumBody">
        <label>
          <h3>Start a post here!:</h3>
          <form onSubmit={handleSubmit}>
            <input placeholder="Title" value={title}onChange={(e) => setTitle(e.target.value)}></input>
            <textarea className="NewPostBody" placeholder="...What's on your mind?" value={content}onChange={(e) => setContent(e.target.value)}></textarea>
            <input placeholder="Tags" value={tag}onChange={(e) => setTag(e.target.value)}></input>
            <button type="submit">Submit</button>
          </form>
        </label>
        <PostCardContainer allPosts={allPosts} setAllPosts={setAllPosts}/>
      </div>
  </div>
  );
};
