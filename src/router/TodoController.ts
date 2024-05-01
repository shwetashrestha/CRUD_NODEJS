// import { Request, Response } from 'express';
// import {Lists} from '../models/Lists';
// const sequelize = require('../connect/connect');
// import { Op } from 'sequelize';

// const insertList = async (req: Request, res: Response) => {
//     try {
//             const { name,description,date,time } = req.body;
//             console.log(req.body)
//             const newTodo = await Lists.create({
//                 name: name,
//                 description:description,
//                 time:time,
//                 date:date
//             });
        
//             res.status(201).json({
//                 message: 'Todo item created successfully',
//                 todo: newTodo
//             });
//         } catch (error) {
//             console.error('Error creating todo:', error);
//             res.status(500).json({ error: 'Failed to create todo item' });
//         }
//  };

// const readList = async (req: Request, res: Response) => {
//     try {
//         const listData = await sequelize.query(`SELECT * FROM lists`);
  
//         const outputData ={
//             Todo: listData[0].map((row: any) => ({
//             TodoId: row.id,
//             Name: row.name,
//             Description: row.description,
//             Time: row.time,
//             Date: row.date,
//         })),
  
//     }  
//       res.json(outputData);
//     } catch (error: any) {
//       res.status(500).json({ error: error.message });
//     }
// };

// const deleteList = async (req: Request, res: Response)=>{
//     try {
//         const id = req.query.id;
//     //     console.log (id);
//     //    // const listData = await sequelize.query(`SELECT * FROM lists`);
//         const listData = await Lists.destroy({ where: { id } });
//         res.json({ message: 'Todo deleted successfully!', listData });
//       } catch (error: any) {
//         res.status(500).json({ error: error.message });
//       }

// }

// export { insertList,readList,deleteList };
