import {createSlice} from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        isJoin: false,
        currentUser: {
            username: '',
            avatar: '',
        },
        users: [],
        messages: []
    },
    reducers: {
        joinHandler(state){
            console.log('dick')
            state.isJoin = !state.isJoin
        },

        getUser(state, action){
            state.currentUser = action.payload
        },

        addUser(state, action){
            state.users =[...action.payload]
        },

        addMessage(state, action){
            state.messages = [...action.payload]
        },

        deleteMessage(state, action){
            state.messages = state.messages.filter(item => item.id !== action.payload)
        },
    }
})

export default toolkitSlice.reducer
export const {joinHandler, getUser, addUser, addMessage, deleteMessage} = toolkitSlice.actions