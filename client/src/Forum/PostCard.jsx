import React from "react";
import { UserContext } from "../App";

function PostCard({post, handleDelete}) {
    const { user } = React.useContext(UserContext);


    return (
        <div className="ForumPost">
        <h1>{post.title}</h1>
        <h3>posted by {post.user_id}</h3>
        <p>{post.content}</p>
        <p>{post.tag}</p>
        <div className="ForumPostButtons">
            {user.username.toString() === post.user_id.toString() ? <button>Edit Post</button> : null}
            {user.username.toString() === post.user_id.toString() ? <button onClick={() => handleDelete(post.id)}>Delete Post</button> : null}
        </div>
        </div>
    );
}

export default PostCard;