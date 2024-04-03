
import { Request,Response } from "express";
import { tasksData } from "./seed";


export class TasksControllers{
    constructor(){}

    getTasks = (req:Request,res:Response) =>{
      
       const tasks = tasksData;
        /* table schema
        task_id INT AUTO_INCREMENT PRIMARY KEY,
        task_name VARCHAR(255) NOT NULL,
        description TEXT,
        due_date DATE,
        priority ENUM('Low', 'Medium', 'High') DEFAULT 'Medium',
        status ENUM('To Do', 'In Progress', 'Done') DEFAULT 'To Do',
        assigned_to INT,
        reminder DATETIME, -- New field for reminders
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at
        */
       
        return res.status(200).json(tasks)
    }

    getTask = (req:Request,res:Response) =>{
        const {id} = req.params;
        console.log(id);

        if(!id){
            return res.status(400).json({
                message: "Please provide a valid id"
            })
        }
       const task = tasksData.find((task) => task.task_id === id);

       if(task){
        return res.status(200).json(task);
       }

       return res.status(404).json({
            message: "Task not found"
        })

    }
}