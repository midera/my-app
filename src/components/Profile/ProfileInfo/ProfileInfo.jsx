import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div >
                <img className={s.header_img}
                    src="https://images.hdqwalls.com/wallpapers/kurzgesagt-to.jpg"
                    alt="img1"/></div>
            <div className={s.description_block}>
                <img className={s.imgAva} src="https://simg.nicepng.com/png/small/173-1738712_report-abuse-pop-art-woman-png.png" alt="ava"/>
               <div> <h2>Midera Valentaine</h2></div>
            </div>
        </div>
    )
}
export default ProfileInfo;
