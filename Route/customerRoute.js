const { getCustomer, postCustomer, getOneCustomer, putCustomer, deleteCustomer } = require('../Controller/customerController');

const route = require('express').Router()

route.get('/', getCustomer);

route.get('/:id', getOneCustomer);

route.post('/', postCustomer);

route.put('/:id', putCustomer);

route.delete('/:id', deleteCustomer);

module.exports = route;