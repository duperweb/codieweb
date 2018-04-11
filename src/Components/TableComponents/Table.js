import React from "react";
import '../App.css';
import datable from "./datable";
import TableRow from "./TableRow";


var tableContainerStyle = {
    color: "rgb(100, 8, 88)",
    textAlign: "center",
    margin: '20px auto',
}

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: datable
        }
    }
    render() {
        return (
            <table style={tableContainerStyle} className="tablecss">
                <tbody>
                    {this.state.data.map((item, i) => <TableRow key={i} data = {item} />)}
                </tbody>
            </table>
        )
    }
}

export default Table;