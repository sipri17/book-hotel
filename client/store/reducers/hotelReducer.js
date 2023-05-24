const initialState = {
    hotel: {}
}

export default function hotelReducer(state = initialState, action) {
    switch (action.type) {
        case "fetchHotels/success":
            return { ...state, hotel: action.payload }
     
        default:
            return state;
    }
}