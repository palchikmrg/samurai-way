import React from "react";
import s from './Post.module.css';

type PostPropsType = {
    message: string
    likesCount:number
}


function Post(props: PostPropsType) {
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