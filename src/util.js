export const findFinishedOrders = orders => (
    orders.filter(order => order.status === 'ORDER')
)

export const findProductNameById = (products, id) => (
    products.find(product => product.id === id).name
)

export const findPendingOrder = orders => (
    orders.find(order => order.status === 'CART')
)

export const findLineItemById = (cart, product) => (
    cart.lineItems.find(lineItem => lineItem.productId === product.id)
)

export const findCartCount = cartOrder => (
    cartOrder.lineItems.reduce((acc, cur) => acc += cur.quantity, 0)
)