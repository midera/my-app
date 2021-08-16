import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";


const Profile = (props) => {


    return (
        <div>

            <ProfileInfo profile={props.profile} job={props.job} updateJob={props.updateJob}/>
            <MyPostsContainer />
        </div>
    )
};
export default Profile;
