// redux saga ts example
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import {
//   getPendingSelector,
//   getTodosSelector,
//   getErrorSelector,
// } from "./store/todo/selectors";
// import { fetchTodoRequest } from "./store/todo/actions";

// const App = () => {
//   const dispatch = useDispatch();
//   const pending = useSelector(getPendingSelector);
//   const todos = useSelector(getTodosSelector);
//   const error = useSelector(getErrorSelector);

//   useEffect(() => {
//     dispatch(fetchTodoRequest());
//   }, []);

//   return (
//     <div style={{ padding: "15px" }}>
//       {pending ? (
//         <div>Loading...</div>
//       ) : error ? (
//         <div>Error</div>
//       ) : (
//         todos.map((todo, index) => (
//           <div style={{ marginBottom: "10px" }} key={todo.id}>
//             {++index}. {todo.title}
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default App;

// orginal example
import './App.css';
// import InputField from '@components/InputField';
import InputField from '@components/InputField';
import { useState } from 'react';
import { ToDo } from '@components/model';
import TodoList from '@components/TodoList';
 
//
// let name: any
// let name: unknown // prefer
let name: string = "String"
let nubmer: number = 5
let isStudent: boolean | string = false
let hobbies: string[] = ["stringArr"]
let role: [number, string] = [5, "role"]

isStudent = true
isStudent = "Yes"

//
type PersonObj = {
  name: string,
  age: number,
  sex?: string
}
let person: PersonObj = {
  name: "myname",
  age: 5
}

let personArr: PersonObj[] = [
  {
    name: "myname",
    age: 5
  },
]

//
// let hanleFx2: (name: string) => string
// let hanleFx3: (name: string) => void //retrun undefine
// let hanleFx4: (name: string) => never // return nothing // prefer
const hanleFx = (name: string): string => {
  let newName = name + " new "
  return newName
}

function hanleFx2(name: string): string {
  let newName = name + " new "
  return newName
}

//
type X = {
  a: string,
  b?: number
}

type Y = X & {
  c?: string,
  d?: number
}

let y : Y = {
  a: "hi a"
}

//
interface IEmployee {
  empCode: number;
  empName: string;
  getSalary: (number: number) => number; // arrow function
  getManagerName(number : number): string; 
}

interface Person extends X {
  name: string
  age?: number
}

interface Guy extends Person {
  profession: string
}

let tryValue: Guy = {
  a: "from X", 
  name: "name fom Person",
  profession: "from Guy"
}

interface Point {
  x: string;
  y: number;
  z: number;
}

let pointPart: Partial<Point> = {
  x: "partial x"
}

const App: React.FC = () => {

  // const [todo, setTodo] = useState<string | number>("")
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<ToDo[]>([])

  const [completedTodos, setCompletedTodos] = useState<ToDo[]>([])

  const handleAdd = (e: React.FormEvent): void => {
    e.preventDefault()

    if (todo){
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}])

      setTodo("")
    }
    
  }

  console.log(todos)


  return (
    <div className="App">
      {hanleFx("Hello world")}
      {hanleFx2("Hello world2")}

      <span className='heading'>{"Taskify"}</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>

      <TodoList todos={todos} setTodos={setTodos}
      completedTodos={completedTodos} setCompletedTodos={setCompletedTodos}
      />
      {/* {
        todos.map((item, index) => {
          return (
            <li key={`${item.todo}-${index}`}>{item.todo}</li>
          )
        })
      } */}
    </div>
  );
}

export default App;
