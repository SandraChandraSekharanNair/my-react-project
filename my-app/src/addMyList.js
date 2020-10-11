import React, { Component } from "react";
import ShowMyList from "./showMyList";

class AddMyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        // This binding is necessary to make `this` work in the callback
    }
    addItem(e) {
        if (this.myinput.value !== "") {
            var newItem = {
                key: Date.now(),
                value: this.myinput.value
            };
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
            this.myinput.value = "";
        }
        e.preventDefault();
    }

    deleteItem(key) {
        var removeList = this.state.items.filter(function (item) {
            return (item.key !== key);
        });  
        this.setState(() => {
            return {
                items: removeList
            };
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addItem}>
                    <input ref={(a) => this.myinput = a}>
                    </input>
                    <button type="submit">Add</button>
                </form>
                <ShowMyList entries={this.state.items} delete={this.deleteItem} />
            </div>
        );
    }
}
export default AddMyList;
