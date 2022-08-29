import React, { useEffect, useRef, useState } from 'react';
import { ToDo } from './model';
import "./styles.css"

interface Props {
    item: ToDo
    todos: ToDo[]
    setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>
    onDragStart: (event: React.DragEvent<HTMLDivElement>) => void  
}

const SingleTodo: React.FC<Props> = (props: Props) => {
    const {
        item,
        todos,
        setTodos,

        onDragStart
    } = props

    const itemID = item.id

    const inputRef = useRef<HTMLInputElement>(null)

    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(item.todo)

    const handleInputOnChange = (e: React.FormEvent): void => {
        const target = e.target as HTMLInputElement

        setEditTodo(target.value)
    }

    const handleEditOnClick = (e: React.FormEvent): void => {
        if (!edit && !item.isDone){
            setEdit(!edit)
        }
    }

    const handleDeleteOnClick = (e: React.FormEvent): void => {
        setTodos(todos.filter(item => item.id !== itemID))
    }

    const handleDoneOnClick = (e: React.FormEvent): void => {
        setTodos(todos.map(item => item.id === itemID ? {...item ,isDone: !item.isDone } : item))
    }

    const handleEditedSubmitOnClick = (e: React.FormEvent): void => {
        e.preventDefault()

        setTodos(todos.map(item => item.id === itemID ? {...item, todo: editTodo } : item))

        setEdit(false)
    } 

    useEffect(() => {   
        inputRef.current?.focus()
    }, [edit])

    //todo useReducer with ts

    return (
        // enter click for onSubmit
        // <form draggable={true} onDragStart={(e) => onDragStart(e)} onSubmit={handleEditedSubmitOnClick}>
        <form onSubmit={handleEditedSubmitOnClick}>
            {
                edit ? (
                    <input 
                        ref={inputRef} 
                        value={editTodo} 
                        onChange={handleInputOnChange}
                    />
                ) : (
                    item.isDone ? (
                        <h1>{item.todo}</h1>
                    ) : (
                        <span>{item.todo}</span>
                    )
                ) 
            }

            <div>
                <span onClick={handleEditOnClick}>{"Edit "}</span>
                <span onClick={handleDeleteOnClick}>{"Delete "}</span>
                <span onClick={handleDoneOnClick}>{"Done "}</span>
            </div>
        </form>
    );
}

export default SingleTodo;