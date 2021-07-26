import { List, ListActions, Task } from "../types";
import {
  ADD_LIST,
  GET_LIST_BY_ID,
  GET_LIST,
  DELETE_LIST,
  UPDATE_LIST,
  SET_LISTID_TO_DELETE,
  SET_LIST_TO_EDIT,
  SET_SELECTED_LIST,
  ADD_TASK,
  DELETE_TASK,
  SET_TASK_TO_DELETE,
  UNSET_TASK_TO_DELETE,
  UPDATE_TASK,
  SET_TASK_TO_EDIT,
  UNSET_TASK_TO_EDIT,
} from "../constants/index";
export const addList = (list: List): ListActions => {
  return {
    type: ADD_LIST,
    payload: list,
  };
};
export const getList = (): ListActions => {
  return {
    type: GET_LIST,
  };
};
export const deleteList = (id: string): ListActions => {
  return {
    type: DELETE_LIST,
    payload: id,
  };
};
export const getListById = (id: string): ListActions => {
  return {
    type: GET_LIST_BY_ID,
    payload: id,
  };
};
export const setListIdToDelete = (id: string): ListActions => {
  return {
    type: SET_LISTID_TO_DELETE,
    payload: id,
  };
};
export const setListToEdit = (id: string): ListActions => {
  return {
    type: SET_LIST_TO_EDIT,
    payload: id,
  };
};
export const setSelectedList = (id: string): ListActions => {
  return {
    type: SET_SELECTED_LIST,
    payload: id,
  };
};
export const updateList = (id: string, name: string): ListActions => {
  return {
    type: UPDATE_LIST,
    payload: {
      id,
      name,
    },
  };
};

export const addTask = (task: Task, list: List): ListActions => {
  return {
    type: ADD_TASK,
    payload: {
      task,
      list,
    },
  };
};
export const deleteTask = (task: Task, list: List): ListActions => {
  return {
    type: DELETE_TASK,
    payload: {
      task,
      list,
    },
  };
};
export const setTaskToDelete = (task: Task, list: List): ListActions => {
  return {
    type: SET_TASK_TO_DELETE,
    payload: {
      task,
      list,
    },
  };
};
export const unsetTaskToDelete = (): ListActions => {
  return {
    type: UNSET_TASK_TO_DELETE,
  };
};
export const editTask = (
  taskId: string,
  taskName: string,
  taskState: boolean,
  list: List
): ListActions => {
  return {
    type: UPDATE_TASK,
    payload: {
      taskId,
      taskName,
      taskState,
      list,
    },
  };
};
export const setTaskToEdit = (task: Task, list: List): ListActions => {
  return {
    type: SET_TASK_TO_EDIT,
    payload: {
      task,
      list,
    },
  };
};
export const unsetTaskToEdit = (): ListActions => {
  return {
    type: UNSET_TASK_TO_EDIT,
  };
};
