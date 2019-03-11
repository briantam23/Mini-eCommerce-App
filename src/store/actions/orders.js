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

const _createLineItem = lineItem => ({
    type: CREATE_LINE_ITEM,
    lineItem
})
export const createLineItem = (product, orderId) => {
    let lineItem = { ...product, productId: product.id };
    return(
        dispatch => (
            axios.post(`/api/orders/${orderId}/lineItems`, lineItem)
                .then(res => res.data)
                .then(lineItem => dispatch(_createLineItem(lineItem)))
        )
    )
}

const _updateLineItem = lineItem => ({
    type: UPDATE_LINE_ITEM,
    lineItem
})
export const updateLineItem = (lineItem, orderId, _quantity, change) => {
    lineItem = { ...lineItem, quantity: _quantity + change };
    return(
        dispatch => (
            axios.put(`/api/orders/${orderId}/lineItems/${lineItem.id}`, lineItem)
                .then(res => res.data)
                .then(lineItem => dispatch(_updateLineItem(lineItem)))
        )
    )
}

const _deleteLineItem = lineItem => ({
    type: DELETE_LINE_ITEM,
    lineItem
})
export const deleteLineItem = (lineItem, orderId) => (
    dispatch => (
        axios.delete(`/api/orders/${orderId}/lineItems/${lineItem.id}`)
            .then(() => dispatch(_deleteLineItem(lineItem)))
    )
)

const _updateOrder = orders => ({
    type: UPDATE_ORDER,
    orders
})
export const updateOrder = (cart, history) => {
    const newOrder = { ...cart, status: 'ORDER' };
    return dispatch => (
        axios.put(`/api/orders/${cart.id}`, newOrder)
            .then(() => axios.get('/api/orders'))
            .then(res => res.data)
            .then(newOrders => {
                history.push('/orders');
                dispatch(_updateOrder(newOrders, cart.userId));
            })
    )
}