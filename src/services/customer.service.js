import CustomerRepository from '../repositories/customer.repository.js';

const createCustomer = async (customer) => {
    return await CustomerRepository.insertCustomer(customer);
};

const updateCustomer = async (customer) => {
    return await CustomerRepository.updateCustomer(customer);
};

const selectCustomers = async () => {
    return await CustomerRepository.selectCustomers();
};

const selectCustomer = async (customerId) => {
    return await CustomerRepository.selectCustomer(customerId);
};

export default {
    createCustomer,
    updateCustomer,
    selectCustomers,
    selectCustomer,
};
