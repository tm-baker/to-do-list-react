import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "../actions/actions";

const initialState = {
    list: ["Item 1", "Item 2", "Item 3"]
};

export function ToDoListReducer(state = initialState, action){
    switch (action.type){
        case ADD_ITEM:
            return { list: [...state.list, action.payload] };
        case DELETE_ITEM:
            return {list: [...state.list.slice(0, action.payload), ...state.list.slice(action.payload + 1)]};
        case EDIT_ITEM:
            return {...state,
                    list: state.list.map((x, i) => {
                        if (action.payload.index === i){
                            x = action.payload.value;
                        }
                        return x;
                    })};
        default: 
            return state;
    }
}