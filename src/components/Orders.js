import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { findFinishedOrders, findProductNameById } from '../util';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';


const Orders = ({ products, orders }) => (
    <Fragment>
        <h2>Orders</h2>
        <hr/>
        {
            orders.map(order => (
                <ListGroup key={ order.id }>
                    <Fragment>Order ID: <br/>{ order.id }</Fragment>
                    {
                        order.lineItems.map(lineItem => (
                            <ListGroup.Item key={ lineItem.id }>
                                <h5>
                                    <Badge variant='primary'>{ findProductNameById(products, lineItem.productId) }</Badge>
                                    <Badge variant='success' style={{ float: 'right' }}>Quantity: { lineItem.quantity }</Badge>
                                </h5>
                            </ListGroup.Item>
                        ))
                    }
                <br/>
                </ListGroup>
            ))
        }
    </Fragment>
)


const mapStateToProps = ({ products, orders }) => {
    orders = findFinishedOrders(orders);
    return { products, orders };
};


export default connect(mapStateToProps)(Orders);