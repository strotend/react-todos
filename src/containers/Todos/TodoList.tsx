import React from "react";

const TodoList: React.FunctionComponent = () => (
  <section className="main">
    <input id="toggle-all" className="toggle-all" type="checkbox" />
    <label />
    <ul className="todo-list">
      <li className="completed">
        <div className="view">
          <input className="toggle" type="checkbox" defaultChecked />
          <label>완료됨</label>
          <button className="destroy" />
        </div>
        <input className="edit" defaultValue="완료됨" />
      </li>
      <li className="completed editing">
        <div className="view">
          <input className="toggle" type="checkbox" defaultChecked />
          <label>완료됨 수정중</label>
          <button className="destroy" />
        </div>
        <input className="edit" defaultValue="완료됨 수정중" />
      </li>
      <li className="">
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>해야함</label>
          <button className="destroy" />
        </div>
        <input className="edit" defaultValue="해야함" />
      </li>
      <li className="editing">
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>해야함 수정중</label>
          <button className="destroy" />
        </div>
        <input className="edit" defaultValue="해야함 수정중" />
      </li>
    </ul>
  </section>
);

export default TodoList;
