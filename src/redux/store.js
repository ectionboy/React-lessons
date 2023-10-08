import { devToolsEnhancer } from "@redux-devtools/extension";
import { nanoid } from "nanoid";
import { createStore } from "redux";


// const initialState = {
//     contacts: [],
//     filter: ""
// };
const initialState = {
    contacts: [
        {
            "name": "ssssss",
            "number": "11111111",
            "id": "MrJil6NafuGWs22fuc3i_"
        },
        {
            "name": "roseeee",
            "number": "11111111222",
            "id": "viVUHF5FiqGrpwKp886ZG"
        }
    ],
    filter: ""
};


const rootReducer = (state = initialState, { type, payload}) => {
    switch (type) {
        case 'addContact':
            return{
                ...state,
                contacts:[
                    ...state.contacts,
                    {
                        ...payload,
                        id: nanoid()
                    }
                ]

            }
    
        default:
            return state
    }
};

// Створюємо розширення стора, щоб додати інструменти розробника
const enhancer = devToolsEnhancer();


export const store = createStore(rootReducer, enhancer  );