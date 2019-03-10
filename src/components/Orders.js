import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';


const Orders = ({ products }) => (
    <Fragment>
        <h2>Orders</h2>
        <hr/>
        <ListGroup>
            <Fragment>Order ID: <br/>#####</Fragment>
                <ListGroup.Item>
                    <h5>
                        <Badge variant='primary'>Product Name</Badge>
                        <Badge variant='success' style={{ float: 'right' }}>Quantity: </Badge>
                    </h5>
                </ListGroup.Item>
        <br/>
        </ListGroup>
    </Fragment>
)


const mapStateToProps = ({ products }) => ({ products });


export default connect(mapStateToProps)(Orders);