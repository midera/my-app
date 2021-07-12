import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://simg.nicepng.com/png/small/173-1738712_report-abuse-pop-art-woman-png.png"
                 alt="postImg"/><h3>{props.message}</h3>
            <div className={s.likeCount}>
                <span><img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e4299734559659.56d57de04bda4.gif"
                           alt=""/>{props.likesCount}</span>
            </div>
        </div>
    );
}
export default Post;
