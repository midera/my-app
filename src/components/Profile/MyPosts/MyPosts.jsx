import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElements = props.postData.map(p => <Post key={p.id} message={p.message} likesCount={p.likeCount}/>);

    let newPostsElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        let sendMessage = newPostsElement.current.value;
        props.updateNewPostActionCreator(sendMessage);
    };
    return <div className={s.posts_block}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostsElement}
                          value={props.newPostsText}/>
            </div>
            <div>
                <button className={s.button_add} onClick={onAddPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}
export default MyPosts;
