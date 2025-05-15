import { createSlice } from "@reduxjs/toolkit"

const initialState = 'initial Notification....'

const notificationSlice = createSlice({
    name: 'notification',
    initialState
})

export default notificationSlice.reducer