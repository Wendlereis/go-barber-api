import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.put('/notification/:id', NotificationController.update);

routes.post('/files', upload.single('file'), FileController.store);
routes.post('/appointments', AppointmentController.store);

routes.get('/providers', ProviderController.index);
routes.get('/appointments', AppointmentController.index);
routes.get('/schedules', ScheduleController.index);
routes.get('/notification', NotificationController.index);

routes.delete('/appointments', AppointmentController.delete);

export default routes;
