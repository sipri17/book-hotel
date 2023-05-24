import { combineReducers } from "redux";
import guestReducer from "./guestReducer";
import hotelReducer from "./hotelReducer"



const rootReducer = combineReducers({
     guests : guestReducer,
     hotel: hotelReducer
}) 

export default rootReducer
