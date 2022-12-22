import Customer from '../models/Customer.model.js';

const insertCustomer = async (customer) => {
    try {
        return await Customer.create(customer);
    } catch (err) {
        throw err;
    }
};

const updateCustomer = async (customer) => {
    try {
        return await Customer.update(customer, {
            where: {
                customerId: customer.customerId,
            },
        });
    } catch (err) {
        throw err;
    }
};

const selectCustomers = async () => {
    try {
        return await Customer.findAll({
            attributes: [
                'customerId',
                'name',
                'email',
                'phoneNumber',
                'address',
            ],
        });
    } catch (err) {
        throw err;
    }
};

const selectCustomer = async (customerId) => {
    try {
        return await Customer.findByPk(customerId, {
            attributes: [
                'customerId',
                'name',
                'email',
                'phoneNumber',
                'address',
            ],
        });
    } catch (err) {
        throw err;
    }
};

export default {
    insertCustomer,
    updateCustomer,
    selectCustomers,
    selectCustomer,
};
