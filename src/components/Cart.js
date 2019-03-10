import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';


const Cart = ({ products }) => {
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
                        return(
                            <tr key={ product.id }>
                                <td>{ product.name }</td>
                                <td>Quantity</td>
                                <td>+</td>
                                <td>-</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
        </Fragment>
    )
}

const mapStateToProps = ({ products }) => ({ products });

export default connect(mapStateToProps)(Cart);