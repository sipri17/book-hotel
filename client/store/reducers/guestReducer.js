const initialState = {
    guests: [{ title: 'Tn. ', name: 'John Doe' },
    {title:'Ny.',name:' Johny Doe Doe'},
    {title: 'Ny.',name:'Johny Doe Doe'}]
}

export default function guestReducer(state = initialState, action) {
    switch (action.type) {
        case "setGuests/success":
            return { ...state, guests: action.payload }
        default:
            return state;
    }
}

