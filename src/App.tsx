import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FiltertValueType = "all" | "active" | "completed"


function App() {

    let [tasks, setTasks] = useState<Array<TaskType>> ([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "RtactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ])


    const removeTasks = (id: string) => {
        let filteredTasks = tasks.filter (t => t.id !== id)
        setTasks(filteredTasks)
    }

    let [filter, setFilter] = useState<FiltertValueType>("all")

    let tasksForTodolist = tasks

    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false)
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true)
    }

    const changeFilter = (value: FiltertValueType) => {
        setFilter(value)
    }

    const addTask = (title: string) => {
        let task = {id: v1(), title: title, isDone: false}
        let newTasks = [task, ...tasks]
        setTasks(newTasks)
    }




    return (
        <div className="App">
            <Todolist title={"What to learn"} tasks={tasksForTodolist} removeTasks={removeTasks} changeFilter={changeFilter} addTask={addTask}/>
        </div>
    );
}

export default App;
