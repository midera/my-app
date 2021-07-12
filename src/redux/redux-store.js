import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePage-reducer";
import dialogsPageReducer from "./dialogsPage-reducer";
import sideBarPageReducer from "./sideBarPage-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";


let reducers = combineReducers({
   profilePage: profilePageReducer,
   dialogsPage: dialogsPageReducer,
    sideBarPage: sideBarPageReducer,
    usersPage: usersReducer,
    authPage: authReducer
})
let store = createStore(reducers);
window.store=store;
export default store;
