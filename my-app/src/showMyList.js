import React, { Component } from "react";

class ShowMyList extends Component {

    constructor(props) {
        super(props);
        this.createlist = this.createlist.bind(this);
    }

    createlist(item) {
        return <li key={item.key} onClick={() => this.deleteItem(item.key)}>{item.value}</li>
    }

    deleteItem(key) {
        this.props.delete(key);
    }

    render() {
        var myList = this.props.entries;
        var showList = myList.map(this.createlist);
        return (
            <ul>
                {showList}
            </ul>
        );
    }
};

export default ShowMyList;