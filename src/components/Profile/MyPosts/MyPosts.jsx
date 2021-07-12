import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let postData = [
        {id: 1, message: 'Hi!!!!!', likeCount: 10},
        {id: 2, message: 'shoopinggoo', likeCount: 8},
        {id: 3, message: 'Spring & summer', likeCount: 70},
        {id: 4, message: 'dog is cute', likeCount: 180},
        {id: 5, message: 'Rain ?', likeCount: 18}]
    let postsElements = postData.map(p => <Post message={p.message} likesCount={p.likeCount}/>)
    return <div className={s.posts_block}>
        <h3>My posts</h3>
        <div>
            <div><textarea> </textarea></div>
            <div>
                <button className={s.button_add}>Add post</button>
                <button className={s.button_remove}>Remove post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}
export default MyPosts;
