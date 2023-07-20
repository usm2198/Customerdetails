const Customer = require('../Model/customer');

// Get Logic
exports.getCustomer('/', (req, res) => {
    try {
        const data = await Customer.find();
        return res.json({ errors: false, data: data });
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
})

// Post Logic
exports.postCustomer('/', (req, res) => {
    try {
        const data = await Customer.create(req.body);
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
})

// Put(update) Logic
exports.putCustomer('/:id', (req, res) => {
    try {
        const data = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json({ errors: false, data: data });
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
})

// Delete Logic
exports.deleteCustomer('/:id', (req, res) => {
    try {
        const data = await Customer.findByIdAndDelete(req.params.id);
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message });
    }
})

// GetOne Customer
exports.getOneCustomer('/:id', (req, res) => {
    try {
        const data = await Customer.getOneCustomer(req.params.id);
        return res.json({ errors: false, data: data });
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
})