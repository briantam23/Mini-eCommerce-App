import { LOAD_INITIAL_ORDERS, CREATE_LINE_ITEM, UPDATE_LINE_ITEM, DELETE_LINE_ITEM } from '../constants';


const ordersReducer = (state = [], action) => {
    switch(action.type) {
        case LOAD_INITIAL_ORDERS:
            return action.orders;
        default:
            return state;
    }
}


export default ordersReducer;