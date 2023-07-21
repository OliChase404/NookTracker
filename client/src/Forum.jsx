import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ActionTypes } from "./containers/redux/constants/action-types";
import PostCardContainer from "./PostCardContainer";

export const PostForm = () => {
  const [title, setTitle] = useState("");  
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  const dispatch = useDispatch();
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
      <h1>Welcome to the Forums</h1>
      <label>
        <h3>Start a post here!:</h3>
        <form onSubmit={handleSubmit}>
          <input value={title}onChange={(e) => setTitle(e.target.value)}></input>
          <input value={content}onChange={(e) => setContent(e.target.value)}></input>
          <input value={tag}onChange={(e) => setTag(e.target.value)}></input>
          <button type="submit">Submit</button>
        </form>
      </label>

      <PostCardContainer allPosts={allPosts} setAllPosts={setAllPosts}/>
    </div>
  );
};
