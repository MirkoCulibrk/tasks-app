import React, { FC } from "react";
import CreateNewList from "./CreateNewList";
import Lists from "../components/Lists";
const Sidebar: FC = () => {
  return (
    <div className="column is-3">
      <CreateNewList></CreateNewList>
      <Lists></Lists>
    </div>
  );
};

export default Sidebar;
