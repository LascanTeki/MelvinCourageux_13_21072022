import { createSlice, configureStore } from "@reduxjs/toolkit";

const UserControl = createSlice({
    name: "control",

    //initial, blank, states
    initialState: {

        logged: false,
        firstname: "",
        lastname : "",
        token : ""

    },

    //reducers, changing the states
    reducers: {

        login: (state, action) => {
            state.logged = true;
            state.firstname = action.payload.response.body.firstName
            state.lastname = action.payload.response.body.lastName
            state.token = action.payload.token

        },

        editing: (state, action) => {
            state.firstname = action.payload.firstname
            state.lastname = action.payload.lastname
        },

        logout: (state) => {
            state.logged = false;
            state.firstname = ""
            state.lastname = ""
        }

    }
})

export const { login, editing, logout } = UserControl.actions

//store, distributing to react
export const store = configureStore({
    reducer: {

        control: UserControl.reducer
    }

})