export const findFinishedOrders = orders => (
    orders.filter(order => order.status === 'ORDER')
)

export const findProductNameById = (products, id) => (
    products.find(product => product.id === id).name
)