import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return (
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
                <div className={s.posts}>
                    <Post message='Hi, how are you?' likesCount={0} />
                    <Post message="It's my first post" likesCount={23} />
                  {/*  <Post />
                    <Post />
                    <Post />
                    <Post />*/}
                </div>
            </div>
    )
}

export default MyPosts;