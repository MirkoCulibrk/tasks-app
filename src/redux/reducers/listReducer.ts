import { UNSET_TASK_TO_EDIT } from './../constants/index';
import{ListActions,ListState,Lists} from '../types';
import {ADD_LIST,GET_LIST_BY_ID,GET_LIST,DELETE_LIST,UPDATE_LIST,SET_LISTID_TO_DELETE,SET_LIST_TO_EDIT,SET_SELECTED_LIST,
    ADD_TASK,
    DELETE_TASK,
    SET_TASK_TO_DELETE,
    UNSET_TASK_TO_DELETE,
    UPDATE_TASK,
    SET_TASK_TO_EDIT
} from '../constants/index';

const initalState:ListState={
    lists:{},
    listIdToDelete:'',
    listToEdit:null,
    listById:null,
    selectedList:null,
    taskToDelete:null,
    taskToEdit:null
}

const getListFromLS=():Lists=>{
    if(localStorage.getItem('task_list')){
        return JSON.parse(localStorage.getItem('task_list') || '{}' );
    }
    return {};
}
const saveListToLs=(lists:Lists)=>{
    localStorage.setItem('task_list',JSON.stringify(lists));
}
export const listReducer=(state=initalState,action:ListActions):ListState=>{
    const listsFromLS=getListFromLS();
    switch(action.type){
        case 'ADD_LIST':
            const clonedListsFromLS = {...listsFromLS};
            clonedListsFromLS[action.payload.id] = action.payload;
            saveListToLs(clonedListsFromLS);
            return {
                ...state,
                lists: clonedListsFromLS
            }
            case GET_LIST:
                return{
                    ...state,
                    lists:listsFromLS
                };
                case GET_LIST_BY_ID:
                    const list=listsFromLS[action.payload];
                    return{
                        ...state,
                        listById:list
                    };
                    case SET_LISTID_TO_DELETE:
                        return{
                            ...state,
                            listIdToDelete:action.payload
                        };
                    case SET_LIST_TO_EDIT:
                        const listToEdit=listsFromLS[action.payload]
                        return{
                            ...state,
                            listToEdit
                        };
                    case DELETE_LIST:{
                       let clonedLists2={...listsFromLS};
                       const listId=clonedLists2[action.payload].id;
                       delete clonedLists2[action.payload];
                       saveListToLs(clonedLists2); 
                       return {
                           ...state,
                           lists:clonedLists2,
                           listIdToDelete:'',
                           listById:null,
                           selectedList: state.selectedList && listId===state.selectedList.id? null :state.selectedList
                       }
                    };
                    case UPDATE_LIST:
                        const clonedLists3={...listsFromLS};
                        clonedLists3[action.payload.id].name=action.payload.name;
                        saveListToLs(clonedLists3);
                        return{
                            ...state,
                            lists:clonedLists3,
                            listToEdit:null
                        };
                    case SET_SELECTED_LIST:
                        const selectedList=getListFromLS()[action.payload];
                        return {
                            ...state,
                            selectedList
                        };
                    case ADD_TASK:
                        const clonedLists4={...listsFromLS};
                        clonedLists4[action.payload.list.id].tasks.push(action.payload.task);
                        saveListToLs(clonedLists4);
                        return{
                            ...state,
                            lists:clonedLists4,
                            selectedList:clonedLists4[action.payload.list.id]
                        };
                    case SET_TASK_TO_DELETE:
                        return{
                            ...state,
                            taskToDelete:{
                                task:action.payload.task,
                                list:action.payload.list
                            }
                        };
                    case UNSET_TASK_TO_DELETE:
                        return{
                            ...state,
                            taskToDelete:null
                        };
                    case DELETE_TASK:
                        const clonedLists5={...listsFromLS};
                        const clonedTask=[...clonedLists5[state.taskToDelete!.list.id].tasks];
                        const task=clonedTask.find((task)=>task.id===state.taskToDelete!.task.id);
                        clonedTask.splice(clonedTask.indexOf(task!),1);
                        clonedLists5[state.taskToDelete!.list.id].tasks=clonedTask;
                        saveListToLs(clonedLists5);
                        return{
                            ...state,
                            lists:clonedLists5,
                            selectedList:clonedLists5[state.taskToDelete!.list.id],
                            taskToDelete:null
                        } 
                    case SET_TASK_TO_EDIT:
                        return{
                            ...state,
                            taskToEdit:{
                                task:action.payload.task,
                                list:action.payload.list
                            }
                        };
                    case UNSET_TASK_TO_EDIT:
                        return{
                            ...state,
                            taskToEdit:null
                        };
                    case UPDATE_TASK:
                        const clonedLists6={...listsFromLS};
                        const clonedList={...clonedLists6[action.payload.list.id]};          
                        const clonedTask2=[...clonedList.tasks];
                        const task1=clonedTask2.find((task)=>task.id===action.payload.taskId);
                        const taskToEdit={...task1!};
                        taskToEdit.name=action.payload.taskName;
                        taskToEdit.completed=action.payload.taskState;
                        const updatedTasks=clonedTask2.map((task)=>task.id===taskToEdit.id?taskToEdit:task);
                        clonedList.tasks=updatedTasks;
                        clonedLists6[clonedList.id]=clonedList;
                        saveListToLs(clonedLists6);
                        return{
                            ...state,
                            lists:clonedLists6,
                            selectedList:clonedList,
                            taskToEdit:null
                        }

            default:
                return state;
    }
}