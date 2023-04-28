import express from 'express';
import { createTea, deleteTeaById, deleteTeasByCategory, getListOfTeas, getTeaByCategory, getTeaById, updateTea, updateTeaDescriptionByName } from '../controllers/teaController.js';

const router = express.Router();
/********READ OPERATIONS********* */
//GET list of teas
router.get('/', getListOfTeas);
//GET tea by Id
router.get('/:id', getTeaById);
//GET tea by category
router.get('/category/:category', getTeaByCategory);

/********CREATE OPERATIONS******** */
//POST create new tea
router.post('/create', createTea);

/********UPDATE OPERATIONS******** */
//PATCH update name description and price
router.patch('/update/:id',updateTea);
//PATCH update description
router.patch('/update/description/:name',updateTeaDescriptionByName)

/********DELETE OPERATIONS******** */
//DELETE tea by id 
router.delete('/delete/:id',deleteTeaById);
//DELETE all teas with specific category
router.delete('/delete/category/:category', deleteTeasByCategory)




export default router;