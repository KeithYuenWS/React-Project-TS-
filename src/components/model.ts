export interface ToDo {
    id: number;
    todo: string;
    isDone: boolean
}

// useReducer
// export interface ActionsPayload {
//     id?: number;
//     todo?: string;
//     isDone?: boolean
// }

// type Actions = {
//     type: 'add' | 'remove' | 'done', 
//     payload: string | number | ActionsPayload
// }

// const TodoReducer = (state: ToDo[], action: Actions) => {
//     switch (action.type) {
//         case "add":
//             return [
//                 ...state,
//                 {id: Date.now(), todo: action.payload, isDone: false}
//             ]
        
//         case "remove":
//             return state.filter(item => item.id !== action.payload)

//         case "done":
//             return state.map(item => {
//                 item.id === action.payload ? 
//                     {...item, isDone: !item.isDone} 
//                 : {...item}
//             })
//     }
// }

// import { stat } from 'fs';
// import { type } from 'os';
// import { useReducer } from 'react'
// const ReducerExample = () => {

//     const [ state, dispatch ] = useReducer(TodoReducer, [])

//     return (
//         <div>
//     )
// }