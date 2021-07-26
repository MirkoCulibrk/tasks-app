import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Notification from "./components/Notification";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import DeleteListModal from "./components/DeleteListModal";
import EditListModal from "./components/EditListModal";
import MainComponents from "./components/MainComponents";
import EditTaskModal from "./components/EditTaskModal";
import DeleteTaskModal from "./components/DeleteTaskModal";
import "./App.css";

function App() {
  const msg = useSelector((state: RootState) => state.notificationData.message);
  const listIdToDelete = useSelector(
    (state: RootState) => state.listData.listIdToDelete
  );
  const listIdToEdit = useSelector(
    (state: RootState) => state.listData.listToEdit
  );
  const taskIdToEdit = useSelector(
    (state: RootState) => state.listData.taskToEdit
  );
  const taskIdToDelete = useSelector(
    (state: RootState) => state.listData.taskToDelete
  );
  return (
    <div className="App">
      <Header
        title="Task List App"
        subtitle="Create some lists and add some tasks to each list"
      ></Header>
      <div className="container px-5">
        <div className="columns">
          <Sidebar></Sidebar>
          <MainComponents></MainComponents>
        </div>
      </div>
      <Notification msg={msg}></Notification>
      {listIdToDelete && (
        <DeleteListModal listId={listIdToDelete}></DeleteListModal>
      )}
      {listIdToEdit && <EditListModal list={listIdToEdit}></EditListModal>}
      {taskIdToEdit && (
        <EditTaskModal taskToEdit={taskIdToEdit}></EditTaskModal>
      )}
      {taskIdToDelete && (
        <DeleteTaskModal taskToDelete={taskIdToDelete}></DeleteTaskModal>
      )}
    </div>
  );
}

export default App;
