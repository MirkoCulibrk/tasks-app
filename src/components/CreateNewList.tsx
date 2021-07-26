import React, { FC, FormEvent, useState } from "react";
import { List } from "../redux/types";
import { useDispatch } from "react-redux";
import { addList } from "../redux/actions/listActions";
import { setNotification } from "../redux/actions/notificationActions";
const CreateNewList: FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const onChange = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim() === "") {
      return alert("List name is required");
    }
    const newList: List = {
      id: `list-${new Date().getTime()}`,
      name: value,
      tasks: [],
    };
    dispatch(addList(newList));
    dispatch(setNotification(`New list ("${newList.name}") is created!`));
    setValue("");
  };
  return (
    <div className="card mb-5">
      <div className="card-header">
        <p className="card-header-title">Create New List</p>
      </div>
      <div className="card-content">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">List Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                placeholder="List Name"
                name="listName"
                value={value}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-primary">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewList;
