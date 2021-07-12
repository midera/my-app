import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profilePage-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostsText: state.profilePage.newPostsText
    }
};


const MyPostsContainer = connect(mapStateToProps, {updateNewPostActionCreator, addPostActionCreator})
(MyPosts);


export default MyPostsContainer;
