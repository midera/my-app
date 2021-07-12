import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://cdn.impactinit.com/cdn/x/x@003c4108c3/smss53/smsimg28/pv/isignstockcontributors/iss_12137_06469.jpg" alt="avaCount"/>
            <span className={s.count}><h2>{props.message}</h2>
            <h5>{props.likesCount}</h5></span>
               <img className={s.likeCount}
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e4299734559659.56d57de04bda4.gif"
                    alt="like"/>


        </div>
    )
}
export default Post;
