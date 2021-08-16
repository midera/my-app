import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <div>
            <Preloader/>
        </div>
    }
    return (
        <div>

            {/*<div >*/}
            {/*    <img className={s.header_img}*/}
            {/*        src="https://images.hdqwalls.com/wallpapers/kurzgesagt-to.jpg"*/}
            {/*        alt="img1"/></div>*/}
            <div className={s.description_block}>
                <img className={s.imgAva} src={props.profile.avatar} alt="fred"/>
                <ProfileStatus job={props.job} updateJob={props.updateJob}/>
                <div className={s.blockInfoPerson}>
                    <h3>{props.profile.first_name} {props.profile.last_name}</h3>
                    Person Info <ul>
                    <li>email: {props.profile.email}</li>
                </ul>

                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;
