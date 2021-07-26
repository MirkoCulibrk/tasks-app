import React, { FC } from "react";
import SelectList from "./SelectList";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import AddNewTask from "./AddNewTask";
import Tasks from "../components/Tasks";
const MainComponents: FC = () => {
  const selectedList = useSelector(
    (state: RootState) => state.listData.selectedList
  );
  console.log(selectedList);
  return (
    <div className="column is-9">
      <div className="box">
        <SelectList></SelectList>
        {selectedList && <AddNewTask list={selectedList}></AddNewTask>}
        {selectedList && <Tasks tasks={selectedList.tasks}></Tasks>}
      </div>
    </div>
  );
};

export default MainComponents;
