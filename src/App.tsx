import "@assets/todomvc.css";

import React from "react";

const App: React.FunctionComponent = () => (
  <div>
    <div className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value=""
      />
    </div>
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label />
      <ul className="todo-list">
        <li className="">
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>1234</label>
            <button className="destroy" />
          </div>
          <input className="edit" value="asdf" />
        </li>
        <li className="">
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>가나다라</label>
            <button className="destroy" />
          </div>
          <input className="edit" value="가나다라" />
        </li>
      </ul>
    </section>
    <footer className="footer">
      <span className="todo-count">
        <strong>2</strong>
        <span> </span>
        <span>items</span>
        <span> left</span>
      </span>
      <ul className="filters">
        <li>
          <a href="#/" className="selected">
            All
          </a>
        </li>
        <span> </span>
        <li>
          <a href="#/active" className="">
            Active
          </a>
        </li>
        <span> </span>
        <li>
          <a href="#/completed" className="">
            Completed
          </a>
        </li>
      </ul>
    </footer>
  </div>
);

export default App;
