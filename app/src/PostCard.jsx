import React from "react";

function PostCard({post, handleDelete}) {
    return (
        <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <p>{post.tag}</p>
        <button>Edit Post</button>
        <button onClick={() => handleDelete(post.id)}>Delete Post</button>
        </div>
    );
}

export default PostCard;