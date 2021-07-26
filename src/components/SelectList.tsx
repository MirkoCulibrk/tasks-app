import React, { FC, FormEvent } from "react";
import { List } from "../redux/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setSelectedList } from "../redux/actions/listActions";
const SelectList: FC = () => {
  const dispatch = useDispatch();
  const lists = useSelector((state: RootState) => state.listData.lists);
  const selectChangeHandler = (e: FormEvent<HTMLSelectElement>) => {
    dispatch(setSelectedList(e.currentTarget.value));
  };
  return (
    <section>
      <h2 className="is-size-4 has-text-centered mb-4">Choose a list</h2>
      <div className="field mb-5">
        <div className="control has-icons-left">
          <div className="select fullwidth">
            <select className="fullwidth" onChange={selectChangeHandler}>
              <option value="">Select List</option>
              {Object.keys(lists).length > 0 &&
                Object.values(lists).map((list: List) => (
                  <option key={list.id} value={list.id}>
                    {list.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="icon is-small is-left">
            <i className="fas fa-list"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectList;
