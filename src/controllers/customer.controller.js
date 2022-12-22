import CustomerService from '../services/customer.service.js';

const createCustomer = async (req, res, next) => {
    try {
        let customer = req.body;

        if (
            !customer.name ||
            !customer.email ||
            !customer.password ||
            !customer.phoneNumber ||
            !customer.address
        ) {
            throw new Error(
                'Name, email, password, phoneNumber and address are required.',
            );
        }

        customer = await CustomerService.createCustomer(customer);

        res.send(customer);
        logger.info(`POST /customer - ${JSON.stringify(customer)}`);
    } catch (err) {
        next(err);
    }
};

const updateCostumer = async (req, res, next) => {
    try {
        let customer = req.body;

        if (
            !customer.customerId ||
            !customer.name ||
            !customer.email ||
            !customer.password ||
            !customer.phoneNumber ||
            !customer.address
        ) {
            throw new Error(
                'CustomerId, name, email, password, phoneNumber and address are required.',
            );
        }

        await CustomerService.updateCustomer(customer);
        res.send(customer);
        logger.info(`PUT /customer - ${JSON.stringify(customer)}`);
    } catch (err) {
        next(err);
    }
};

const selectCustomers = async (req, res, next) => {
    try {
        res.send(await CustomerService.selectCustomers());
        logger.info('GET /customer');
    } catch (err) {
        next(err);
    }
};

const selectCustomer = async (req, res, next) => {
    try {
        const customerId = req.params.id;

        res.send(await CustomerService.selectCustomer(customerId));
        logger.info(`GET /customer/${customerId}`);
    } catch (err) {
        next(err);
    }
};

export default {
    createCustomer,
    updateCostumer,
    selectCustomers,
    selectCustomer,
};
