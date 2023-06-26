import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, TOGGLE_COMPLETE } from "../actions/actions";

const initialState = {
    list: [{value: "Item 1",
            is_complete: false},
            {value: "Item 2",
            is_complete: false},
            {value: "Item 3",
            is_complete: false}]
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
                            x = {value: action.payload.value,
                                is_complete: x.is_complete};
                        }
                        return x;
                    })};
        case TOGGLE_COMPLETE:
            return {...state,
                    list: state.list.map((x, i) => {
                        if (action.payload.index === i){
                            x = {value: x.value,
                                is_complete: !x.is_complete};
                        }
                        return x;
                    })};
        default: 
            return state;
    }
}