import express from 'express';
import APIService from  '../../service/api.service';
import EmployeesService from '../../service/employees/employees.service';

const router: express.Router = express.Router();

router.post('/employees', async (req: express.Request, res: express.Response) => {
    if (!req.body) res.status(400).json({ data: null, message: 'not been entered data to form'});

    const employeesService: EmployeesService = new EmployeesService();
    APIService.processingOnAPIOfDataModels({ req, res, method: employeesService.create(req.body), dataError: null });
});

export default router;