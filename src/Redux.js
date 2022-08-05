import { createSlice, configureStore } from "@reduxjs/toolkit";

const UserControl = createSlice({
    name: "control",

    initialState: {

        logged: false,
        firstname: "",
        lastname : ""

    },

    reducers: {

        login: (state, action) => {
            
            state.logged = true;
            state.firstname = action.payload.body.firstName
            state.lastname = action.payload.body.lastName

        },

        set: (state, action) => {

            state.user = action

        },

        edit: (state, action) => {

        },

        logout: (state) => {
            console.log("action");
            state.logged = false;
            state.user = ""
            state.token = ""
        }

    }
})

export const { login, set, edit, logout } = UserControl.actions



export const store = configureStore({
    reducer: {

        control: UserControl.reducer
    }

})