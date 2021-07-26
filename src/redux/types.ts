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
  SET_NOTIFICATION,
} from "./constants";
export interface Task {
  name: string;
  id: string;
  completed: boolean;
}
export interface List {
  name: string;
  id: string;
  tasks: Task[];
}
export interface Lists {
  [id: string]: List;
}


interface AddListAction {
  type: typeof ADD_LIST;
  payload: List;
}
interface DeleteListAction {
  type: typeof DELETE_LIST;
  payload: string;
}
interface GetListAction {
  type: typeof GET_LIST;
}
interface GetListByIdAction {
  type: typeof GET_LIST_BY_ID;
  payload: string;
}
interface SetListIdToDeleteAction {
  type: typeof SET_LISTID_TO_DELETE;
  payload: string;
}
interface SetListIdToEditAction {
  type: typeof SET_LIST_TO_EDIT;
  payload: string;
}
interface SetSelectedListAction {
  type: typeof SET_SELECTED_LIST;
  payload: string;
}
interface UpdateListAction {
  type: typeof UPDATE_LIST;
  payload: {
    id: string;
    name: string;
  };
}


interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: {
    task: Task;
    list: List;
  };
}
interface DeleteTaskAction {
  type: typeof DELETE_TASK;
  payload: {
    task: Task;
    list: List;
  };
}
interface SetTaskToDeleteAction {
  type: typeof SET_TASK_TO_DELETE;
  payload: {
    task: Task;
    list: List;
  };
}
interface UnsetTaskToDeleteAction {
  type: typeof UNSET_TASK_TO_DELETE;
}
interface EditTaskAction {
  type: typeof UPDATE_TASK;
  payload: {
    taskId: string;
    taskName: string;
    taskState: boolean;
    list: List;
  };
}
interface SetTaskToEditAction {
  type: typeof SET_TASK_TO_EDIT;
  payload: {
    task: Task;
    list: List;
  };
}
interface UnsetTaskToEditAction {
  type: typeof UNSET_TASK_TO_EDIT;
}
interface SetNotificationAction {
  type: typeof SET_NOTIFICATION;
  payload: {
    msg: string;
    type: string;
  };
}


export type ListActions =
  | AddListAction
  | GetListAction
  | GetListByIdAction
  | SetListIdToDeleteAction
  | SetListIdToEditAction
  | DeleteListAction
  | UpdateListAction
  | SetSelectedListAction
  | AddTaskAction
  | DeleteTaskAction
  | SetTaskToDeleteAction
  | UnsetTaskToDeleteAction
  | EditTaskAction
  | SetTaskToEditAction
  | UnsetTaskToEditAction;

export type NotificationAction = SetNotificationAction;

export interface ListState {
  lists: Lists;
  listIdToDelete: string;
  listToEdit: List | null;
  listById: List | null;
  selectedList: List | null;
  taskToDelete: {
    task: Task;
    list: List;
  } | null;
  taskToEdit: {
    task: Task;
    list: List;
  } | null;
}

export interface NotificationState {
  message: string;
  type: string;
}
