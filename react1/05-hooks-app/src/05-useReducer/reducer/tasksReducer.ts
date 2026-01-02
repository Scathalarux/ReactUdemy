import * as z from "zod";
import type { Todo } from "../TaskApp";

type TaskState = {
  todos: Todo[];
  length: number;
  completed: number;
  pending: number;
};
export type TaskAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };

//Validación de esctructuras
const TodoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean(),
});

const TaskStateSchema = z.object({
  todos: z.array(TodoSchema),
  length: z.number(),
  completed: z.number(),
  pending: z.number(),
});

export function getTasksInitialState(): TaskState {
  const localStorageState = localStorage.getItem("tasks-state");
  const defaultValues = {
    todos: [],
    length: 0,
    completed: 0,
    pending: 0,
  };
  if (!localStorageState) {
    return defaultValues;
  }

  //validar mediante Zod
  const result = TaskStateSchema.safeParse(JSON.parse(localStorageState));
  if (result.error) {
    console.log(result.error);
    return defaultValues;
  }

  // sin validación de zod: return JSON.parse(localStorageState);
  return result.data;
}

export function taskReducer(state: TaskState, action: TaskAction): TaskState {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      const newTodos = [...state.todos, newTodo];

      return {
        ...state,
        todos: newTodos,
        length: newTodos.length,
        pending: state.pending + 1,
      };
    }
    case "TOGGLE_TODO": {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

      const completedTodos = updatedTodos.filter(
        (todo) => todo.completed
      ).length;
      const pendingTodos = updatedTodos.length - completedTodos;

      return {
        ...state,
        todos: updatedTodos,
        completed: completedTodos,
        pending: pendingTodos,
      };
    }
    //Solo en el return
    /*
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        }),
      };
    */
    case "DELETE_TODO": {
      const newTodos = state.todos.filter((todo) => todo.id != action.payload);

      const completedTodos = newTodos.filter((todo) => todo.completed).length;
      const pendingTodos = newTodos.length - completedTodos;

      return {
        ...state,
        todos: newTodos,
        length: newTodos.length,
        completed: completedTodos,
        pending: pendingTodos,
      };
    }
    default:
      return state;
  }
}
