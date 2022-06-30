import React from "react";
import s from './Post.module.css';

function Post() {
    return (
        <div className={s.item}>
            <img src='https://pbs.twimg.com/media/EqB8qn1UcAIeSFq.jpg'/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;