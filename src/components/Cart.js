import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { createLineItem, updateLineItem, deleteLineItem } from '../store/actions/orders';
import { findPendingOrder, findLineItemById } from '../util';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const Cart = ({ cart, products, createLineItem, updateLineItem, deleteLineItem }) => {
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
                                <td onClick={ () => inCart ? updateLineItem(lineItem, orderId, quantity, 1) : createLineItem(product, orderId) }>
                                    <Button>+</Button>
                                </td>
                                <td onClick={ () => quantity > 1 ? updateLineItem(lineItem, orderId, quantity, -1) : deleteLineItem(lineItem, orderId) }>
                                    <Button disabled={ quantity === 0 }>-</Button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
        </Fragment>
    )
}

const mapStateToProps = ({ products, orders }) => { 
    const cart = findPendingOrder(orders);
    return { cart, products };
};

const mapDispatchToProps = ({ createLineItem, updateLineItem, deleteLineItem });


export default connect(mapStateToProps, mapDispatchToProps)(Cart);