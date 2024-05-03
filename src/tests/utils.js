// utils.test.js

import { getTodos } from "../redux/features/todos.slice";

describe('addNewTask utility function', () => {
    it('should add a new task to the todos array', () => {
      const mockDispatch = jest.fn();
      const task = { id: 1, todo: 'New Task', completed: false, userId: 1 };
  
      addNewTask(task)(mockDispatch);
  
      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'todos/addTask',
        payload: task,
      });
    });
});

describe('getTodos utility function', () => {
    it('should return the todos array', () => {
      const todos = [{ id: 1, todo: 'Task 1', completed: false, userId: 1 }];
      const getState = () => ({ todos: { todos } });
  
      const result = getTodos()(null, getState);
  
      expect(result).toEqual(todos);
    });
  });
