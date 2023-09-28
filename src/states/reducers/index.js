import { createSlice } from "@reduxjs/toolkit";


//this is reducer file 

// const nameCapital = (naam) => {
//     return naam.charAt(0).toUpperCase() + naam.slice(1);
// }
export const user = createSlice({
    name: 'user',
    initialState: {
        register: JSON.parse(localStorage.getItem('register')),
        login: JSON.parse(localStorage.getItem('login')),
        userForm: JSON.parse(localStorage.getItem('formData')),
        tasks: JSON.parse(localStorage.getItem('tasks'))
    },
    reducers: {
        REGISTER: (state, action) => {
            return {
                ...state, register: action.payload, userForm: JSON.parse(localStorage.getItem('formData'))
            };
        },
        LOGIN: (state, action) => {
            return { ...state, login: action.payload };
        },
        ADD_TASK: (state, action) => {
            return { ...state, tasks: [action.payload, ...state.tasks] }
        },
        DEL_TASK: (state, action) => {
            return { ...state, tasks: action.payload }
        }

    }
})

export const { REGISTER, LOGIN, ADD_TASK, DEL_TASK } = user.actions;
export default user.reducer;