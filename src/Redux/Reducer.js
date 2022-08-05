import { LOGIN, LOGOUT, EDIT } from './Type';


const INITIAL_STATE = {
    logged: false,
    
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case LOGIN:

            return {

                ...state, logged: true,

            };

        case LOGOUT:

            return {
                ...state, logged: false,

            };
            
        case EDIT:

            return {
                ...state, logged: true,

            };

        default: return state;


    }

};

export default reducer;