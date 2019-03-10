import { LOAD_INITIAL_ORDERS, CREATE_LINE_ITEM, UPDATE_LINE_ITEM, DELETE_LINE_ITEM } from '../constants';
import Cart from '../../components/Cart';


const ordersReducer = (state = [], action) => {
    let cart = state.find(order => order.status === 'CART');
    switch(action.type) {
        case LOAD_INITIAL_ORDERS:
            return action.orders;
        case UPDATE_LINE_ITEM:
            let lineItems = cart.lineItems.map(_lineItem => _lineItem !== action.lineItem.id ? _lineItem : action.lineItem);
            cart = { ...cart, lineItems };
            return state.map(order => order.status !== 'CART' ? order : cart);
        default:
            return state;
    }
}


export default ordersReducer;