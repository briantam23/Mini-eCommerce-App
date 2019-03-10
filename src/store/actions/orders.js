import { LOAD_INITIAL_ORDERS, CREATE_LINE_ITEM, UPDATE_LINE_ITEM, DELETE_LINE_ITEM ,UPDATE_ORDER, RESET_ORDERS } from '../constants';
import axios from 'axios';


const _laodInitialOrders = orders => ({
    type: LOAD_INITIAL_ORDERS,
    orders
})

export const loadInitialOrders = userId => (
    dispatch => (
        axios.get('/api/orders')
            .then(res => res.data)
            .then(orders => dispatch(_laodInitialOrders(orders)))
    )
)