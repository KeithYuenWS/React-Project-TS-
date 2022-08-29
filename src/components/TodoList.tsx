import React from 'react';
import { ToDo } from './model';
import SingleTodo from './SingleTodo';
import Draggable from 'react-draggable'; // The default
import "./styles.css"

interface Props {
    todos: ToDo[]
    setTodos: React.Dispatch<React.SetStateAction<ToDo[]>>
    completedTodos: ToDo[]
    setCompletedTodos: React.Dispatch<React.SetStateAction<ToDo[]>>
}

const TodoList: React.FC<Props> = (props: Props) => {
    const {
        todos,
        setTodos
    } = props

    // todo typescript with redux saga
    
    const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    }
      
    const onDragStart = (event: React.DragEvent<HTMLDivElement>): void  => {
        event.dataTransfer.setData("text", event.currentTarget.id);

        console.log("event onDragStart")
        console.log(event.currentTarget.id)

    }

    const onDragEnter = (event: React.DragEvent<HTMLDivElement>, index: number): void  => {
        console.log("event onDragEnter")
        console.log(index)
    }
      
    function drop(event: React.DragEvent<HTMLDivElement>) {
        let id = event.dataTransfer.getData("text");

        console.log("event drop")
        console.log(event)
    }


    return(
        <div className={'container'}>
            <div className={'todos'}>
                <span className={'todos_heading'}>
                    {'Active Tasks'}
                </span>
                <div onDrop={drop} onDragOver={allowDrop}>
                    {
                        todos.map((item, index) => {
                            return (
                                // <Draggable handle='.drag-handler'>
                                // <Draggable>
                                    <div id={`${index}`} draggable={"true"} onDragStart={onDragStart} onDragEnter={e => onDragEnter(e, index)}> 
                                        {/* // <li key={`${item.todo}-${index}`}>{item.todo}</li> */}
                                        <SingleTodo 
                                            key={`${item.todo}-${index}`}
                                            item={item}
                                            todos={todos}
                                            setTodos={setTodos}
                                            onDragStart={onDragStart}
                                        />
                                    </div>
                                // </Draggable>
                            )
                        })
                    }
                </div>
            </div>

            <div className={'todos remove'} style={{marginTop: 20}}>
            <span className={'todos_heading'}>
                {'Completed Tasks'}
            </span>
            <div>
                {
                    todos.map((item, index) => {
                        return (
                            // <li key={`${item.todo}-${index}`}>{item.todo}</li>
                            <SingleTodo 
                                key={`${item.todo}-${index}`}
                                item={item}
                                todos={todos}
                                setTodos={setTodos}
                                onDragStart={onDragStart}
                            />
                        )
                    })
                }
            </div>
            </div>
        </div>
    )
}

export default TodoList;