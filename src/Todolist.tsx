import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FiltertValueType} from './App';


export type TaskType = {
    id: string
    title: string
    isDone: boolean

}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTasks: (id: string) => void
    changeFilter: (value: FiltertValueType) => void
    addTask: (title: string) => void
}


export const Todolist = (props: PropsType) => {

    let [title, setTitle] = useState ("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const addTask = () => {
        props.addTask(title)
        setTitle("")
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            setTitle(e.currentTarget.value)
            addTask ()
        }
    }

    const onAllClickHandler = () => {props.changeFilter("all")}
    const addActiveClickHandler = () => {props.changeFilter("active")}
    const addCompletedClickHandler = () => {props.changeFilter("completed")}



    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {props.tasks.map(t => <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                <button onClick={() => {props.removeTasks(t.id)}}>x</button>
                </li>
                    )}
            </ul>
            <div>
                <button onClick={onAllClickHandler}>All</button>
                <button onClick={addActiveClickHandler}>Active</button>
                <button onClick={addCompletedClickHandler}>Completed</button>
            </div>
        </div>
    )

}