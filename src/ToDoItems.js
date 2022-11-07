import React, { Component } from "react";
import FlipMove from "react-flip-move";

class ToDoItems extends Component {
  constructor(props) {
    super(props);
    this.kreirajTask = this.kreirajTask.bind(this);
  }

  deleteTask(kljuc){
    this.props.delete(kljuc);
  }
  kreirajTask(item) {
    return (
      <li onClick={() => this.deleteTask(item.vreme)} vreme={item.vreme}>
        {item.text}
      </li>
    );
  }
  render() {
    let elementi = this.props.elementi;
    let listItems = elementi.map(this.kreirajTask);
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
}

export default ToDoItems;
