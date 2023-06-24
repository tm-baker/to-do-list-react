import { ADD_ITEM } from "../actions/actions";

const initialState = {
    list: ["Item 1", "Item 2", "Item 3"]
};


//TO DO: Add delete item and edit item actions
export function ToDoListReducer(state = initialState, action){
    switch (action.type){
        case ADD_ITEM:
            return { list: [...state.list, action.payload] };
            default: 
            return state;
    }
}