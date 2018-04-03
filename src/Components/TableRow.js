import React from "react";
import './App.css';

class TableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            inputValue: this.props.data.precios 
        }
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
    }

    edit() {
        this.setState({
            editing: true,
            money: "$rd"
        })
    }
    save() {
        this.setState({
            editing: false,
        })

    }
    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        })
    }
    renderNormal() {
        return (
            <tr >
                <td className="tablecss">{this.props.data.servicios}</td>
                <td className="tableprecios" onClick={this.edit}>{this.state.inputValue}</td>
            </tr>

        )
    }
    renderForm() {
        return (
            <tr> 
                <td className="tablecss">{this.props.data.servicios}</td>
                <td>
                    <input type="text" ref="newText" className="lengthInput"
                        value={this.state.inputValue}
                        onChange={evt => this.updateInputValue(evt)} />
                    <button onClick={this.save}>save</button>
                </td>
            </tr>

        )
    }
    render() {
        if (!this.state.editing) {
            return this.renderNormal()
        } else {
            return this.renderForm()
        }
    }
}

export default TableRow;