import React, { Component } from "react";
import ToDoItems from "./ToDoItems.js";
import "./Todolist.css";


class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.dodajUListu = this.dodajUListu.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(vreme) {
    let filtriraniNiz = this.state.items.filter(function (item) {
      // provravam vreme i ako se podudara sa vremenom to izvacuje iz niza ,sve ostalo vraca u novi niz.
      return item.vreme !== vreme;
    });

    this.setState({
      items: filtriraniNiz,
    });
  }

  dodajUListu(e) {
    e.preventDefault(); // cuva task , bez toga stalno brise
    let nizEl=this.state.items;
    if(this._inputElement.value !==""){
      nizEl.unshift({
        text: this._inputElement.value,
        vreme: Date.now(), // po vremenu redja taskove
      });
      this.setState({
        items: nizEl,
      });
    }
    this._inputElement.value = ""; // ono sto stoji u input polju po difoltu,ali nakon prvog taska
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.dodajUListu}>
            <input
              ref={(a) => (this._inputElement = a)}
              type="text"
              placeholder="Unesite task"
            ></input>
            <button type="submit">Dodaj zadatak</button>
          </form>
        </div>
        <ToDoItems
          elementi={this.state.items}
          delete={this.deleteItem}
        ></ToDoItems>
      </div>
    );
  }
}

export default ToDoList;
