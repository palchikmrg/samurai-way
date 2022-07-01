import React from "react";
import s from './Post.module.css';

function Post(props: any) {

    return (
        <div className={s.item}>
            <img src='https://pbs.twimg.com/media/EqB8qn1UcAIeSFq.jpg'/>
            {props.message}
            <div>
                <span>like</span> { props.likesCount }
            </div>
        </div>
    )
}

export default Post;