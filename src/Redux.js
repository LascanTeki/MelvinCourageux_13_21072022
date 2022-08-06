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

        edit: (state, action) => {

        },

        logout: (state) => {
            state.logged = false;
            state.firstname = ""
            state.lastname = ""
        }

    }
})

export const { login, edit, logout } = UserControl.actions



export const store = configureStore({
    reducer: {

        control: UserControl.reducer
    }

})