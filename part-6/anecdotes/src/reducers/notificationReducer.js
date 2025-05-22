import { createSlice } from "@reduxjs/toolkit"

const initialState = null

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        settingNotification(state, action){
            const notification = action.payload
            return notification
        }
    }
})

export const setNotification = (notification, time) => {
    return async (dispatch) => {
        dispatch(settingNotification(notification))
        await new Promise(resolve => setTimeout(resolve, time*1000))
        dispatch(settingNotification(null))
    }
}



export const { settingNotification } = notificationSlice.actions
export default notificationSlice.reducer