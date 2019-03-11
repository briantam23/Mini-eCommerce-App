import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { createLineItem, updateLineItem, deleteLineItem, updateOrder } from '../store/actions/orders';
import { findPendingOrder, findLineItemById, findCartCount } from '../util';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { UPDATE_ORDER } from '../store/constants';


const Cart = ({ cart, products, createLineItem, updateLineItem, deleteLineItem, updateOrder, history }) => {
    return(
        <Fragment>
            <h2>Cart</h2>
            <hr/>
            <h3>Products</h3>
            <Table striped bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                {
                    products.map(product => {
                        let quantity = 0;
                        let inCart = false;
                        let lineItem = null;
                        if(findLineItemById(cart, product)) {
                            lineItem = findLineItemById(cart, product);
                            quantity = lineItem.quantity;
                            inCart = true;
                        }
                        const orderId = cart.id;
                        return(
                            <tr key={ product.id }>
                                <td>{ product.name }</td>
                                <td>{ quantity }</td>
                                <td onClick={ () => inCart ? updateLineItem(lineItem, orderId, quantity, 'increment') : createLineItem(product, orderId) }>
                                    <Button variant='success'>+</Button>
                                </td>
                                <td onClick={ () => quantity > 1 ? updateLineItem(lineItem, orderId, quantity, 'decrement') : deleteLineItem(lineItem, orderId) }>
                                    <Button disabled={ quantity === 0 } variant='danger'>-</Button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
            <Button 
                onClick={ () => updateOrder(cart, history) }
                disabled={ findCartCount(cart) === 0 }
                variant='primary'
                block
                style={{ marginTop: '30px' }}
            >
                Create Order
            </Button>
        </Fragment>
    )
}

const mapStateToProps = ({ products, orders }, { history }) => { 
    const cart = findPendingOrder(orders);
    return { cart, products, history };
};

const mapDispatchToProps = ({ createLineItem, updateLineItem, deleteLineItem, updateOrder });


export default connect(mapStateToProps, mapDispatchToProps)(Cart);