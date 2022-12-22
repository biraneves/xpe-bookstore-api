import express, { Router } from 'express';
import CustomerController from '../controllers/customer.controller.js';

const router = express.Router();

router.post('/', CustomerController.createCustomer);
router.put('/', CustomerController.updateCostumer);
router.get('/', CustomerController.selectCustomers);
router.get('/:id', CustomerController.selectCustomer);

export default router;
