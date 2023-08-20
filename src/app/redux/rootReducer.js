import { combineReducers } from "redux";
import reducer from "./user/userReducer";

const rootReducer = combineReducers({
    user:reducer
})

export default rootReducer;