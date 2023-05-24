import { apiKey, appId } from '@env'


export function setGuestData(input) {
    return (dispatch, getState) => {

        dispatch({
            type: "setGuests/success",
            payload: input
        })
    }
}

export function fetchHotels(search) {
    return async (dispatch, getState) => {
        try {            
            const response = await fetch(
                `https://parseapi.back4app.com/classes/hotel/bVonXoSUHK`, {
                headers: {
                    "X-Parse-Application-Id": appId,
                    "X-Parse-REST-API-Key": apiKey
                }

            }
            );
            if (!response.ok) {
                throw await response.json()
            }
            const {chosen_hotel} = await response.json()
            dispatch({
                type: "fetchHotels/success",
                payload: chosen_hotel.data.get_chosen_hotel
            })

        } catch (error) {
            console.error(error)
        }

    }
}
