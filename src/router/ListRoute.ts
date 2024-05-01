const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');
import {insert ,read,deleteList} from '../controllers/ListController';

router.post('/Add',insert); 
router.get('/Get',read); 
router.delete('/Delete',deleteList); 

module.exports = router;
