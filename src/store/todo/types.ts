import {
    FETCH_TODO_REQUEST,
    FETCH_TODO_SUCCESS,
    FETCH_TODO_FAILURE,
  } from "./actionType";
  
    // state value obj type
  export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  
  // initial state value
  export interface TodoState {
    pending: boolean;
    todos: ITodo[];
    error: string | null;
  }

  // action case
  export type TodoActions =
    | FetchTodoRequest
    | FetchTodoSuccess
    | FetchTodoFailure;
  
  // call action param
  export interface FetchTodoSuccessPayload {
    todos: ITodo[];
  }
  
  export interface FetchTodoFailurePayload {
    error: string;
  }
  
  export interface FetchTodoRequest {
    type: typeof FETCH_TODO_REQUEST;
  }
  
  // action return type
  export type FetchTodoSuccess = {
    type: typeof FETCH_TODO_SUCCESS;
    payload: FetchTodoSuccessPayload;
  };
  
  export type FetchTodoFailure = {
    type: typeof FETCH_TODO_FAILURE;
    payload: FetchTodoFailurePayload;
  };
