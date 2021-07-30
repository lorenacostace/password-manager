
// Initial state
export const initialStatePasswordManager = {
    passwordOne: '',
    passwordTwo: '',
    hintPassword: '',
    enableButton: true,
    status: 'KO',
    feedback: false,
};

// Actions
export const actions = {
    setPassword: (id, value) => {
        return {
            type: "SET_PASSWORD",
            payload: {id, value}
        }
    },
    setEnableButton: (value) => {
        return {
            type: "SET_ENABLE_BUTTON",
            payload: value
        }
    },
    setStatus: (value) => {
        return {
            type: "SET_STATUS",
            payload: value
        }
    },
    setFeedback: (value) => {
        return{
            type: "SET_FEEDBACK",
            payload: value
        }
    }

};

// Reducers
export const passwordReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_PASSWORD":
            return {
                ...state,
                [action.payload.id]: action.payload.value,
            }
        case "SET_ENABLE_BUTTON":
            return {
                ...state,
                enableButton: action.payload,
            }
        case "SET_STATUS":
            return {
                ...state,
                status: action.payload,
            }
        case "SET_FEEDBACK":
            return {
                ...state,
                feedback: action.payload,
            }
        default:
            return state;
    }
}