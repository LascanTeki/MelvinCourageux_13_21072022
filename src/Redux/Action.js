import { LOGIN, LOGOUT, EDIT } from './Type';
import AuthService from "./Service";
import store from "../Store"


export function login(username, password) {
    console.log("data");
    return AuthService.login(username, password).then(
        (data) => {
            if (data.status===200) {
                store.dispatch({
                    type: LOGIN,
                    payload: { user: data },
                });
            }

        },
    );
};

/*export const login =() => (dispa){
    console.log("data");
    return {
        type: "AddNewComponent"
    }
}*/

export const logout = () => (dispatch) => {
    AuthService.logout();
    dispatch({
        type: LOGOUT,
    });
};

export const edit = () => {

    return {

        type: EDIT,

    };

};